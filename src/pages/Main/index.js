import React, { useState } from "react";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Header from "../../components/Header";
import {
  Container,
  CounterContainer,
  TimeNum,
  TimeText,
  ContentContainer,
  ContentTitle,
  ActionButtonsContainer,
  ActionButton,
} from "./styles";

function Main() {
  const [minutes, setMinutes] = useState(25);

  return (
    <Container>
      <Header title="Pomodoro" sound alert />
      <CounterContainer>
        <CircularProgressbarWithChildren
          maxValue={25}
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
    </Container>
  );
}

export default Main;
