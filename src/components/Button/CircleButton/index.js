import React from "react";
import {
  MdVolumeOff,
  MdVolumeUp,
  MdNotificationsActive,
  MdNotificationsOff,
} from "react-icons/md";

import { Button } from './styles';

function CircleButton({ sound, alert }) {
  return (
    <>
    <Button>
      {sound && <MdVolumeUp color="#9ca1bc" size={20} />}
      {alert && <MdNotificationsActive color="#9ca1bc" size={20} />}
      </Button>
    </>
  );
}

export default CircleButton;
