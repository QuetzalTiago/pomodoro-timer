import React from "react";

const Counter = ({ timeLeft, startTimer, stopTimer, resetTimer }) => {
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
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-sm">
          <h1 className="timer">
            {minutes}:{leftZero}
            {seconds}
            {rightZero}
          </h1>
          <button
            className="btn btn-primary btn-lg ml-2"
            onClick={() => startTimer()}
          >
            Start
          </button>
          <button
            className="btn btn-warning btn-lg"
            onClick={() => stopTimer()}
          >
            Pause
          </button>
          <button
            className="btn btn-danger btn-lg"
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
