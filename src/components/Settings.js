import React from "react";

const Settings = ({ changeInterval, interval }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-2 mt-3">
          <h5>Focus time (minutes)</h5>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="15"
              max="50"
              min="1"
              defaultValue={interval / 60}
              aria-describedby="basic-addon2"
              id="focus-time"
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() =>
                  changeInterval(document.getElementById("focus-time").value)
                }
              >
                Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
