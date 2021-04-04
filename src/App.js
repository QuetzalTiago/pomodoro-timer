import React, { Fragment, useEffect, useState } from "react";
import Counter from "./components/Counter";
import Quote from "./components/Quote";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import CurrentTask from "./components/CurrentTask";
import Footer from "./components/Footer";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  //intervalo en localStorage
  let focusInterval = localStorage.getItem("focusInterval");
  if (!focusInterval) {
    localStorage.setItem("focusInterval", "1500");
  }
  let restInterval = localStorage.getItem("restInterval");
  if (!restInterval) {
    localStorage.setItem("restInterval", "600");
  }
  let user = localStorage.getItem("user");
  if (!user) {
    localStorage.setItem("user", false);
  }
  let userIsLoggedIn;
  if (user === "true") {
    userIsLoggedIn = true;
  } else {
    userIsLoggedIn = false;
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
  const [loggedin, setLoggedIn] = useState(userIsLoggedIn);
  const [tasklist, setTaskList] = useState([]);
  const [currenttask, setCurrentTask] = useState({});
  const [taskactive, setTaskActive] = useState(false);
  const [goal, setGoal] = useState(8);
  const [userinfo, setUserInfo] = useState({});

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

  useEffect(() => {
    //initialize materialize
    M.AutoInit();
    //load user info
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserInfo(JSON.parse(userInfo));
    }
  }, []);

  useEffect(() => {
    if (!(Object.keys(tasklist).length === 0)) {
      setTaskActive(true);
    }
  }, [tasklist]);

  return (
    <Fragment>
      <Header
        changeFocusInterval={changeFocusInterval}
        changeRestInterval={changeRestInterval}
        focusinterval={focusinterval}
        restinterval={restinterval}
        loggedin={loggedin}
        userinfo={userinfo}
        setUserInfo={setUserInfo}
      />
      <div className="container">
        <Quote quote={quote} />
        {taskactive ? <CurrentTask currenttask={currenttask} /> : null}
        <Counter
          focusinterval={focusinterval}
          restinterval={restinterval}
          countdown={countdown}
          setCountdown={setCountdown}
          task={currenttask}
          tasklist={tasklist}
          setTaskList={setTaskList}
          taskactive={taskactive}
        />
        <TaskList
          goal={goal}
          setGoal={setGoal}
          tasklist={tasklist}
          setTaskList={setTaskList}
          setCurrentTask={setCurrentTask}
          setUserInfo={setUserInfo}
        />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
