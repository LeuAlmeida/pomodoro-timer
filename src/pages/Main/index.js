import React, { useState, useEffect } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { addMinutes, getMinutes } from "date-fns";

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
  const [initialTime, setInitialTime] = useState(null);

  let valueDifference;

  function handleStart() {
    if (!play) {
      setFinalTime(addMinutes(new Date(), maxValue % minutes));
      setInitialTime(new Date());
      setPlay(play);
    }

    setFinalTime(addMinutes(new Date(), maxValue));
    setInitialTime(new Date());
    setPlay(!play);

    /**
     * Looping infinito! Corrigir:
     */
    
    // while(finalTime <= initialTime) {
    //   setMinutes(getMinutes(finalTime <= initialTime))
    // }
  }

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
        <SquareButton onClick={handleStart} play={play} />
      </PlayStopContent>
    </Container>
  );
}

export default Main;
