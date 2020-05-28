import React from "react";
import Mousetrap from "mousetrap";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { getMinutes } from "date-fns";

import Header from "../../components/Header";
import SquareButton from "../../components/Button/SquareButton";

import {
  Container,
  CounterContainer,
  TimeNum,
  TimeText,
  ContentContainer,
  ContentTitle,
  ActionButtonsContainer,
  ActionButton,
  PlayStopContent,
} from "./styles";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      play: false,
      timeType: 0,
      title: "",
    };
    // Bind early, avoid function creation on render loop
    this.setTimeForWork = this.setTime.bind(this, 1500);
    this.setTimeForRelax = this.setTime.bind(this, 300);
    this.setTimeForCoffee = this.setTime.bind(this, 900);
    this.reset = this.reset.bind(this);
    this.play = this.play.bind(this);
    this.elapseTime = this.elapseTime.bind(this);
  }

  componentDidMount() {
    this.setDefaultTime();
    this.startShortcuts();
    Notification.requestPermission();
  }

  elapseTime() {
    if (this.state.time === 0) {
      this.reset(0);
      this.alert();
    }
    if (this.state.play === true) {
      let newState = this.state.time - 1;
      this.setState({ time: newState, title: this.getTitle(newState) });
    }
  }

  format(seconds) {
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor((seconds % 3600) % 60);
    let timeFormated = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
    return timeFormated;
  }

  getFormatTypes() {
    return [
      { type: "work", time: 1500, color: "#7456f2" },
      { type: "relax", time: 300, color: "#5eef94" },
      { type: "coffee", time: 900, color: "#d8f261" },
    ];
  }

  formatType(timeType) {
    let timeTypes = this.getFormatTypes();
    for (let i = 0; i < timeTypes.length; i++) {
      let timeObj = timeTypes[i];
      if (timeObj.time === timeType) {
        return timeObj.type;
      }
    }
    return null;
  }

  formatTime(timeType) {
    let timeTypes = this.getFormatTypes();
    for (let i = 0; i < timeTypes.length; i++) {
      let timeObj = timeTypes[i];
      if (timeObj.time === timeType) {
        return timeObj.time;
      }
    }
    return null;
  }

  formatColor(timeType) {
    let timeTypes = this.getFormatTypes();
    for (let i = 0; i < timeTypes.length; i++) {
      let timeObj = timeTypes[i];
      if (timeObj.time === timeType) {
        return timeObj.color;
      }
    }
    return null;
  }

  restartInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(this.elapseTime, 1000);
  }

  play() {
    if (true === this.state.play) return;

    this.restartInterval();

    this.setState({
      play: true,
    });
  }

  reset(resetFor = this.state.time) {
    clearInterval(this.interval);
    let time = this.format(resetFor);
    this.setState({ play: false });
  }

  togglePlay() {
    if (true === this.state.play) return this.reset();

    return this.play();
  }

  setTime(newTime) {
    this.restartInterval();

    this.setState({
      time: newTime,
      timeType: newTime,
      title: this.getTitle(newTime),
      play: true,
    });
  }

  setDefaultTime() {
    let defaultTime = 1500;

    this.setState({
      time: defaultTime,
      timeType: defaultTime,
      title: this.getTitle(defaultTime),
      play: false,
    });
  }

  getTitle(time) {
    time = typeof time === "undefined" ? this.state.time : time;
    let _title = this.format(time) + " | Pomodoro timer";
    return _title;
  }

  startShortcuts() {
    Mousetrap.bind("space", this.togglePlay.bind(this));
    Mousetrap.bind(["ctrl+left", "meta+left"], this.toggleMode.bind(this, -1));
    Mousetrap.bind(["ctrl+right", "meta+right"], this.toggleMode.bind(this, 1));
  }

  toggleMode(gotoDirection) {
    let timeTypes = this.getFormatTypes();
    let currentPosition = -1;

    for (let i = 0; i < timeTypes.length; i++) {
      if (timeTypes[i].time === this.state.timeType) {
        currentPosition = i;
        break;
      }
    }

    if (currentPosition !== -1) {
      let newMode = timeTypes[currentPosition + gotoDirection];
      if (newMode) this.setTime(newMode.time);
    }
  }

  _setLocalStorage(item, element) {
    let value = element.target.checked;
    localStorage.setItem("pomodoro-" + item, value);
  }

  _getLocalStorage(item) {
    return localStorage.getItem("pomodoro-" + item) == "true" ? true : false;
  }

  alert() {
    // vibration
    if (this.refs.vibrate.checked) {
      window.navigator.vibrate(1000);
    }
    // audio
    if (this.refs.audio.checked) {
      let audio = new Audio("songs/alarm.mp3");
      audio.play();
      setTimeout(() => audio.pause(), 1400);
    }
    // notification
    if (this.refs.notification.checked) {
      if (this.state.timeType === 1500) {
        let notification = new Notification("Relax :)", {
          icon: "img/coffee.png",
          lang: "en",
          body: "Go talk or drink a coffee.",
        });
      } else {
        let notification = new Notification("The time is over!", {
          icon: "img/code.png",
          lang: "en",
          body: "Hey, back to code!",
        });
      }
    }
  }

  capitalize(s) {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  render() {
    return (
      <Container>
        <Header
          title="Pomodoro"
          sound
          alert
          onCheckAlert={this._setLocalStorage.bind(this, "notification")}
          onCheckSound={this._setLocalStorage.bind(this, "audio")}
        />

        <CounterContainer>
          <CircularProgressbarWithChildren
            maxValue={this.formatTime(this.state.timeType)}
            strokeWidth={3}
            value={this.state.time}
            styles={buildStyles({
              rotation: 1,
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
              pathColor: this.formatColor(this.state.timeType),
              textColor: "#f88",
              trailColor: "#3c405e",
              backgroundColor: this.formatColor(this.state.timeType),
            })}
          >
            <TimeNum>{this.format(this.state.time)}</TimeNum>
            <br />
            <TimeText>
              {getMinutes(this.state.time) === 1 ? "Minute" : "Minutes"}
            </TimeText>
          </CircularProgressbarWithChildren>
        </CounterContainer>

        <ContentContainer>
          <ContentTitle>
            {this.capitalize(this.formatType(this.state.timeType))}
          </ContentTitle>
          <ActionButtonsContainer type="work">
            <ActionButton
              work
              active={
                this.formatType(this.state.timeType) === "work" ? true : false
              }
              onClick={this.setTimeForWork}
            />
            <ActionButton
              relax
              active={
                this.formatType(this.state.timeType) === "relax" ? true : false
              }
              onClick={this.setTimeForRelax}
            />
            <ActionButton
              coffee
              active={
                this.formatType(this.state.timeType) === "coffee" ? true : false
              }
              onClick={this.setTimeForCoffee}
            />
          </ActionButtonsContainer>
        </ContentContainer>

        <PlayStopContent>
          <SquareButton
            onClick={this.state.play === true ? this.reset : this.play}
            play={!this.state.play}
          />
        </PlayStopContent>
        {/* <div className="bottomBar">
          <div className="controls">
            <div className="container">
              <div className="controlsLink">
                <a
                  href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                  target="_blank"
                >
                  What is Pomodoro?
                </a>
              </div>
              <div className="controlsCheck">
                <span className="check">
                  <input
                    type="checkbox"
                    ref="notification"
                    id="notification"
                    defaultChecked={this._getLocalStorage("notification")}
                    onChange={this._setLocalStorage.bind(this, "notification")}
                  />
                  <label htmlFor="notification"></label>
                  <span className="checkTitle">Notification</span>
                </span>

                <span className="check">
                  <input
                    type="checkbox"
                    ref="audio"
                    id="audio"
                    defaultChecked={this._getLocalStorage("audio")}
                    onChange={this._setLocalStorage.bind(this, "audio")}
                  />
                  <label htmlFor="audio"></label>
                  <span className="checkTitle">Sound</span>
                </span>

                <span className="check">
                  <input
                    type="checkbox"
                    ref="vibrate"
                    id="vibrate"
                    defaultChecked={this._getLocalStorage("vibrate")}
                    onChange={this._setLocalStorage.bind(this, "vibrate")}
                  />
                  <label htmlFor="vibrate"></label>
                  <span className="checkTitle">Vibration</span>
                </span>
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div> */}
      </Container>
    );
  }
}
