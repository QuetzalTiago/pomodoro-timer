import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import M from "materialize-css/dist/js/materialize.min.js";

const Title = styled.p`
  font-size: 1.5rem;
`;

const Number = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Settings = ({
  focusinterval,
  restinterval,
  changeFocusInterval,
  changeRestInterval,
}) => {
  const [focusValue, setFocusValue] = useState(focusinterval / 60);
  const [restValue, setRestValue] = useState(restinterval / 60);

  const saveChanges = () => {
    if (focusValue >= 1) {
      changeFocusInterval(focusValue);
    }
    if (restValue >= 1) {
      changeRestInterval(restValue);
    }
    M.toast({ html: "Changes successfully saved" });
  };

  let minutesFocus;
  if (focusValue === "1") {
    minutesFocus = " minute";
  } else {
    minutesFocus = " minutes";
  }
  let minutesRest;
  if (restValue === "1") {
    minutesRest = " minute";
  } else {
    minutesRest = " minutes";
  }
  return (
    <div className="container ">
      <div className="row">
        <label htmlFor="focus">
          <Title className="center">Focus time</Title>
        </label>
        <p class="range-field">
          <input
            type="range"
            id="focus"
            min="1"
            max="60"
            value={focusValue}
            onChange={(e) => {
              setFocusValue(e.target.value);
            }}
          />
        </p>
        <label htmlFor="focus">
          <Number className="center">
            {focusValue}
            {minutesFocus}
          </Number>
        </label>
      </div>
      <div className="row">
        <label htmlFor="rest">
          <Title className="center">Rest time</Title>
        </label>
        <p class="range-field">
          <input
            type="range"
            id="rest"
            min="1"
            max="60"
            value={restValue}
            onChange={(e) => {
              setRestValue(e.target.value);
            }}
          />
        </p>
        <label htmlFor="rest">
          <Number className="center">
            {" "}
            {restValue}
            {minutesRest}
          </Number>
        </label>
      </div>
      <div className="row center">
        <a class="modal-close btn" onClick={saveChanges}>
          Save changes
        </a>
      </div>
    </div>
  );
};

export default Settings;
