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
  userinfo,
}) => {
  useEffect(() => {
    //initialize materialize
    M.AutoInit();
  });

  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper teal darken-3">
          <a href="#!" className="brand-logo center">
            Pomodoro!
          </a>

          <ul className="right">
            <li>
              <a className="modal-trigger" href="#modal2">
                <i className="material-icons">account_circle</i>
              </a>
            </li>
            <li>
              <a className="modal-trigger" href="#modal1">
                <i className="material-icons">settings</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <Settings
            changeFocusInterval={changeFocusInterval}
            changeRestInterval={changeRestInterval}
            focusinterval={focusinterval}
            restinterval={restinterval}
          />
        </div>
      </div>
      <div id="modal2" className="modal">
        <div className="modal-content">
          <Login loggedin={loggedin} userinfo={userinfo} />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
