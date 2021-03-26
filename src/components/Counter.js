import React, { useState, useEffect } from "react";

const Counter = ({ focusinterval, restinterval, countdown, setCountdown }) => {
  //state
  const [timeLeft, setTimeLeft] = useState(focusinterval);
  const [rest, setRest] = useState(false);

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
        console.log("rest off");
      } else {
        setRest(true);
        console.log("rest on");
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

  let textOne;
  let textTwo;

  if (rest) {
    textOne = "Press start to rest!";
    textTwo = "Rest easy for now";
  } else {
    textOne = "Press start to focus!";
    textTwo = "Stay focused!";
  }

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <h1 className="timer">
            {minutes}:{leftZero}
            {seconds}
            {rightZero}
          </h1>
          {countdown ? (
            <h1 className="timer-header">{textTwo}</h1>
          ) : (
            <h1 className="timer-header">{textOne}</h1>
          )}
          {countdown ? (
            <button
              className="btn btn-warning btn-lg timer-btn"
              onClick={() => stopTimer()}
            >
              Pause
            </button>
          ) : (
            <button
              className="btn btn-success btn-lg timer-btn"
              onClick={() => startTimer()}
            >
              Start
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            className="btn btn-danger btn-sm mt-1 timer-btn"
            onClick={() => resetTimer()}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
