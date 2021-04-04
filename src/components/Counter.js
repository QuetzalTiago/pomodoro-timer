import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import M from "materialize-css/dist/js/materialize.min.js";

//styled components
const Button = styled.button`
  width: 150px;
`;

const Timer = styled.h1`
  font-size: 6.5rem;
`;

const Message = styled.h1`
  font-weight: lighter;
  font-size: 2rem;
`;

const Pomodoros = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: lighter;
`;

const PomodorosNumber = styled.h1`
  font-size: 4rem;
  font-weight: lighter;
`;

const Counter = ({
  focusinterval,
  restinterval,
  countdown,
  setCountdown,
  task,
  taskactive,
  tasklist,
  setTaskList,
}) => {
  //state
  const [timeLeft, setTimeLeft] = useState(focusinterval);
  const [rest, setRest] = useState(false);
  const [pomodoros, setPomodoros] = useState(0);
  const [goal, setGoal] = useState(8);
  //resetear timer cuando se pasa a rest
  useEffect(() => {
    resetTimer();
  }, [rest, setRest]);

  //resetear timer si se cambia de task
  useEffect(() => {
    if (taskactive) {
      setGoal(task.pomodoros);
      setPomodoros(task.completed);
      setRest(false);
      resetTimer();
    }
  }, [task, taskactive, tasklist, setTaskList]);

  //resetear timer si se cambia el intervalo
  useEffect(() => {
    if (countdown === false) {
      resetTimer();
    }
  }, [focusinterval, restinterval]);

  //Disminuir contador
  let count;
  useEffect(() => {
    count = setTimeout(() => {
      if (countdown) {
        setTimeLeft(timeLeft - 1);
      } else {
        resetTimer();
      }
    }, 1000);
    if (timeLeft === 0) {
      let audio = new Audio("./goes-without-saying.mp3");
      audio.play();
      M.toast({ html: "Pomodoro done, Congratulations!" });
      resetTimer();
      if (rest) {
        setRest(false);
      } else {
        setRest(true);
        setPomodoros(pomodoros + 1);
        updateTask();
      }
    }
  }, [timeLeft, countdown]);

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

  //Update task
  const updateTask = () => {
    tasklist.forEach((item) => {
      if (item.name === task.name) {
        item.completed = item.completed + 1;
      }
    });
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

  if (rest) {
    messageStart = "Press start to rest";
    messagePause = "Rest easy for now";
  } else {
    messageStart = "Press start to focus";
    messagePause = "Stay focused";
  }

  return (
    <Fragment>
      <div className="row">
        <div className="center">
          <PomodorosNumber>
            {pomodoros} / {goal}{" "}
          </PomodorosNumber>
          <Pomodoros> pomodoros done</Pomodoros>
        </div>
      </div>
      <div className="row">
        <div className="center">
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
              className="btn-large waves-effect waves-light"
              onClick={() => stopTimer()}
            >
              Pause
            </Button>
          ) : (
            <Button
              className="btn-large waves-effect waves-light"
              onClick={() => startTimer()}
            >
              Start
            </Button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="center">
          <Button
            className="btn-small waves-effect waves-light"
            onClick={() => resetTimer()}
          >
            Reset
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Counter;
