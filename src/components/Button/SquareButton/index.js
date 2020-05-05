import React from "react";

import { FiPlay, FiPause } from 'react-icons/fi'

import { Button } from './styles';

function SquareButton({ play, onClick }) {
  return (
    <>
    <Button onClick={onClick}>
      {play && <FiPlay color="#9ca1bc" size={26} />}
      {!play && <FiPause color="#9ca1bc" size={26} />}
      </Button>
    </>
  );
}

export default SquareButton;
