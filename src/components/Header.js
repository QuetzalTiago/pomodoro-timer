import React, { useEffect, Fragment } from "react";
import Settings from "./Settings";
import Login from "./Login";
import M from "materialize-css/dist/js/materialize.min.js";
const Header = ({
  changeFocusInterval,
  changeRestInterval,
  focusinterval,
  restinterval,
  loggedin,
  setLoggedIn,
}) => {
  useEffect(() => {
    //initialize materialize
    M.AutoInit();
  });

  return (
    <Fragment>
      <nav>
        <div class="nav-wrapper teal darken-4">
          <a href="#" class="brand-logo center">
            Pomodoro
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a class="btn modal-trigger" href="#modal1">
                Options
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="modal1" class="modal">
        <div class="modal-content">
          <Login loggedin={loggedin} setLoggedIn={setLoggedIn} />
          <Settings
            changeFocusInterval={changeFocusInterval}
            changeRestInterval={changeRestInterval}
            focusinterval={focusinterval}
            restinterval={restinterval}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
