import React, { Fragment, useEffect, useState } from "react";
import Counter from "./components/Counter";
import Quote from "./components/Quote";
import Header from "./components/Header";

function App() {
  //intervalo en localStorage
  let focusInterval = localStorage.getItem("focusInterval");
  if (!focusInterval) {
    localStorage.setItem("focusInterval", "2100");
  }
  let restInterval = localStorage.getItem("restInterval");
  if (!restInterval) {
    localStorage.setItem("restInterval", "600");
  }

  // state
  const [countdown, setCountdown] = useState(false);
  const [restinterval, setRestInterval] = useState(
    parseInt(localStorage.getItem("restInterval"))
  );
  const [focusinterval, setFocusInterval] = useState(
    parseInt(localStorage.getItem("focusInterval"))
  );
  const [quote, setQuote] = useState("");

  //Cambiar intervalo de focus
  const changeFocusInterval = (seconds) => {
    const minutes = seconds * 60;
    setFocusInterval(minutes);
    localStorage.setItem("focusInterval", minutes.toString());
  };

  //Cambiar intervalo de rest
  const changeRestInterval = (seconds) => {
    const minutes = seconds * 60;
    setRestInterval(minutes);
    localStorage.setItem("restInterval", minutes.toString());
  };

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

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <Header
            changeFocusInterval={changeFocusInterval}
            changeRestInterval={changeRestInterval}
            focusinterval={focusinterval}
            restinterval={restinterval}
          />
        </div>
      </div>
      <div className="container">
        <Quote quote={quote} />
        <Counter
          focusinterval={focusinterval}
          restinterval={restinterval}
          countdown={countdown}
          setCountdown={setCountdown}
        />
      </div>
    </Fragment>
  );
}

export default App;
