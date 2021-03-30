import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

//styled components
const Button = styled.button`
  width: 100px;
`;

const Timer = styled.h1`
  font-size: 120px;
`;

const Message = styled.h1`
  font-weight: lighter;
`;

const Pomodoros = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: lighter;
`;

const PomodorosNumber = styled.h1`
  font-size: 50px;
  font-weight: lighter;
`;

const Counter = ({ focusinterval, restinterval, countdown, setCountdown }) => {
  //state
  const [timeLeft, setTimeLeft] = useState(focusinterval);
  const [rest, setRest] = useState(false);
  const [pomodoros, setPomodoros] = useState(0);

  useEffect(() => {
    resetTimer();
  }, [rest, setRest]);

  //Disminuir contador
  let count;
  useEffect(() => {
    count = setTimeout(() => {
      if (countdown) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
    if (timeLeft === 0) {
      let audio = new Audio("./goes-without-saying.mp3");
      audio.play();
      resetTimer();
      if (rest) {
        setRest(false);
      } else {
        setRest(true);
        setPomodoros(pomodoros + 1);
      }
    }
  }, [timeLeft, countdown]);

  //Intervalo de tiempo
  useEffect(() => {
    if (rest) {
      setTimeLeft(parseInt(localStorage.getItem("restInterval")));
    } else {
      setTimeLeft(parseInt(localStorage.getItem("focusInterval")));
    }
    resetTimer();
  }, [focusinterval, restinterval]);

  //Parar contador
  const stopTimer = () => {
    clearTimeout(count);
    setCountdown(false);
  };

  //Empezar contador
  const startTimer = () => {
    setCountdown(true);
  };

  //Resetear contador
  const resetTimer = () => {
    clearTimeout(count);
    setCountdown(false);
    if (rest) {
      setTimeLeft(restinterval);
    } else {
      setTimeLeft(focusinterval);
    }
  };

  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft - minutes * 60;
  let rightZero = 0;
  let leftZero = 0;
  if (seconds > 0) {
    rightZero = null;
  }
  if (seconds >= 10 || seconds === 0) {
    leftZero = null;
  }

  let messageStart;
  let messagePause;
  let messagePomodoros;

  if (pomodoros === 1) {
    messagePomodoros = "pomodoro done";
  } else {
    messagePomodoros = "pomodoros done";
  }

  if (rest) {
    messageStart = "Press start to rest!";
    messagePause = "Rest easy for now";
  } else {
    messageStart = "Press start to focus!";
    messagePause = "Stay focused!";
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <Timer>
            {minutes}:{leftZero}
            {seconds}
            {rightZero}
          </Timer>
          {countdown ? (
            <Message>{messagePause}</Message>
          ) : (
            <Message>{messageStart}</Message>
          )}
          {countdown ? (
            <Button
              className="btn btn-warning btn-lg"
              onClick={() => stopTimer()}
            >
              Pause
            </Button>
          ) : (
            <Button
              className="btn btn-success btn-lg"
              onClick={() => startTimer()}
            >
              Start
            </Button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Button
            className="btn btn-danger btn-sm mt-1"
            onClick={() => resetTimer()}
          >
            Reset
          </Button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          {pomodoros > 0 ? (
            <PomodorosNumber> {pomodoros}</PomodorosNumber>
          ) : null}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {pomodoros > 0 ? <Pomodoros> {messagePomodoros}</Pomodoros> : null}
        </div>
      </div>
    </div>
  );
};

export default Counter;
