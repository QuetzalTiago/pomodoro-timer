import React from "react";
const Footer = () => {
  return (
    <footer className="page-footer teal">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">What is pomodoro?</h5>
            <p className="grey-text text-lighten-4">
              The Pomodoro Technique is a time management method developed by
              Francesco Cirillo in the late 1980s. The technique uses a timer to
              break down work into intervals, traditionally 25 minutes in
              length, separated by short breaks.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">More info</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pomodoro Technique - Wikipedia
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.youtube.com/watch?v=z7e7gtU3PHY"
                  target="_blank"
                  rel="noreferrer"
                >
                  How a student changed her study habits
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://todoist.com/productivity-methods/pomodoro-technique"
                  target="_blank"
                  rel="noreferrer"
                >
                  The pomodoro technique - todoist
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://www.themuse.com/advice/take-it-from-someone-who-hates-productivity-hacksthe-pomodoro-technique-actually-works"
                  target="_blank"
                  rel="noreferrer"
                >
                  The pomodoro technique actually works
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2021 Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/QuetzalTiago/pomodoro-timer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
<h1>From footer</h1>;
