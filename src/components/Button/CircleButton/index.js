import React, { useEffect, useState } from "react";
import {
  MdVolumeOff,
  MdVolumeUp,
  MdNotificationsActive,
  MdNotificationsOff,
} from "react-icons/md";

import { Button } from "./styles";

function CircleButton({ sound, alert }) {
  const [audioState, setAudioState] = useState(false);
  const [notificationState, setNotificationState] = useState(false);

  function _getLocalStorage(item) {
    return localStorage.getItem("pomodoro-" + item) == "true" ? true : false;
  }

  function handleSetAudio() {
    localStorage.setItem("pomodoro-audio", !audioState);

    setAudioState(!audioState);
  }

  function handleSetNotifications() {
    localStorage.setItem("pomodoro-notification", !notificationState);

    setNotificationState(!notificationState);
  }

  useEffect(() => {
    const sounds = _getLocalStorage("audio");
    setAudioState(sounds === "true" ? true : false);

    const alerts = _getLocalStorage("notification");
    setNotificationState(alerts === "true" ? true : false);
  }, []);

  return (
    <>
      {sound && (
        <Button onClick={handleSetAudio}>
          {audioState ? (
            <MdVolumeOff color="#9ca1bc" size={20} />
          ) : (
            <MdVolumeUp color="#9ca1bc" size={20} />
          )}
        </Button>
      )}
      {alert && (
        <Button onClick={handleSetNotifications}>
          {notificationState ? (
            <MdNotificationsOff color="#9ca1bc" size={20} />
          ) : (
            <MdNotificationsActive color="#9ca1bc" size={20} />
          )}
        </Button>
      )}
    </>
  );
}

export default CircleButton;
