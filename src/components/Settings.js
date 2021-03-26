import React, { useState, useEffect } from "react";

const Settings = ({ interval, changeInterval }) => {
  const [focusValue, setFocusValue] = useState(interval / 60);
  const [restValue, setRestValue] = useState();

  useEffect(() => {
    changeInterval(focusValue);
  }, [focusValue]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md mt-3">
          <h5>Focus time (minutes)</h5>
          <div className="input-group">
            <input
              onChange={(e) => {
                setFocusValue(e.target.value);
              }}
              type="number"
              className="form-control"
              value={focusValue}
              max="50"
              min="1"
              aria-describedby="basic-addon2"
              id="focus-time"
            ></input>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md mt-3">
          <h5>Rest time (minutes)</h5>
          <div className="input-group">
            <input
              onChange={(e) => {
                setRestValue(e.target.value);
              }}
              type="number"
              className="form-control"
              value={restValue}
              max="50"
              min="1"
              aria-describedby="basic-addon2"
              id="focus-time"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
