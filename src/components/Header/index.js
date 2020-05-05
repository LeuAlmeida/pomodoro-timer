import React from "react";

import { Container, Title } from "./styles";

import CircleButton from "../Button/CircleButton";

function Header({ title, sound, alert }) {
  return (
    <Container>
      {sound && <CircleButton sound />}
      <Title>{title}</Title>
      {alert && <CircleButton alert />}
    </Container>
  );
}

export default Header;
