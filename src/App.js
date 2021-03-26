import React, { Fragment, useEffect, useState } from "react";
import Counter from "./components/Counter";
import Settings from "./components/Settings";
import Quote from "./components/Quote";
import Header from "./components/Header";

function App() {
  //intervalo en localStorage
  let localStorageInterval = localStorage.getItem("localStorageInterval");
  if (!localStorageInterval) {
    localStorage.setItem("localStorageInterval", "2100");
  }

  // state
  const [interval, setInterval] = useState(
    parseInt(localStorage.getItem("localStorageInterval"))
  );
  const [timeLeft, setTimeLeft] = useState(interval);
  const [countdown, setCountdown] = useState(false);
  const [quote, setQuote] = useState("");

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
    }
  }, [timeLeft, countdown]);

  //Cargar frases
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        let index = Math.floor(Math.random() * 1600);
        setQuote(data[index]);
      });
  }, []);

  //Intervalo de tiempo
  useEffect(() => {
    setTimeLeft(parseInt(localStorage.getItem("localStorageInterval")));
  }, [interval]);

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
    setTimeLeft(interval);
  };

  //Cambiar intervalo
  const changeInterval = (seconds) => {
    const minutes = seconds * 60;
    setInterval(minutes);
    localStorage.setItem("localStorageInterval", minutes.toString());
    stopTimer();
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Header changeInterval={changeInterval} interval={interval} />
        </div>
      </div>
      <div className="container">
        <Quote quote={quote} />
        <Counter
          timeLeft={timeLeft}
          startTimer={startTimer}
          stopTimer={stopTimer}
          resetTimer={resetTimer}
        />
      </div>
    </Fragment>
  );
}

export default App;
