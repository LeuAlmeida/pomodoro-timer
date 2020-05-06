import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { addMinutes } from "date-fns";

import "react-circular-progressbar/dist/styles.css";

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

function Main() {
  const [minutes, setMinutes] = useState(25);

  const [play, setPlay] = useState(true);
  const [maxValue, setmaxValue] = useState(25);

  const [finalTime, setFinalTime] = useState(null);

  var min;
  var counter;

  function handleStart() {
    setFinalTime(addMinutes(new Date(), maxValue % minutes));
    setPlay(!play);

    var deadline = addMinutes(new Date(), finalTime || minutes).getTime();

    counter = setInterval(() => {
      var now = new Date().getTime();
      var t = deadline - now;
      min = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

      setMinutes(min);

      if (t < 0) {
        setMinutes(0);
        console.log("Acabou!!!");
      }

      console.log(`Minutos: ${min}`)
    }, 1000);
    console.log('Play!');
  }

  function handlePause() {
    console.log('Pause!')
    setFinalTime(null);
    setPlay(!play);
    clearInterval(counter);
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <Header title="Pomodoro" sound alert />

      <CounterContainer>
        <CircularProgressbarWithChildren
          maxValue={maxValue}
          strokeWidth={3}
          value={minutes}
          styles={buildStyles({
            rotation: 1,
            strokeLinecap: "round",
            pathTransitionDuration: 0.5,
            pathColor: "#7457f2",
            textColor: "#f88",
            trailColor: "#3c405e",
            backgroundColor: "#7457f2",
          })}
        >
          <TimeNum>{minutes}</TimeNum>
          <br />
          <TimeText>Minutes</TimeText>
        </CircularProgressbarWithChildren>
      </CounterContainer>

      <ContentContainer>
        <ContentTitle>Work</ContentTitle>
        <ActionButtonsContainer type="work">
          <ActionButton active />
          <ActionButton />
          <ActionButton />
        </ActionButtonsContainer>
      </ContentContainer>

      <PlayStopContent>
        <SquareButton onClick={play ? handleStart : handlePause} play={play} />
      </PlayStopContent>
    </Container>
  );
}

export default Main;
