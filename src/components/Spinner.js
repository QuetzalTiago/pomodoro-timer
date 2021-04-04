import "./Spinner.css";
import React from "react";
const Spinner = () => {
  return (
    <div className="sk-chase loader spinner">
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  );
};

export default Spinner;
