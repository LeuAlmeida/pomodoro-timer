import React from 'react';

import Header from '../../components/Header'
import { Container } from './styles';

function Main() {
  return (
    <Container>
      <Header title="Pomodoro" sound alert />
    </Container>
  );
}

export default Main;