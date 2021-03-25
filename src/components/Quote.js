import React from "react";
const Quote = ({ quote }) => {
  const { author, text } = quote;
  return (
    <div className="container pt-3">
      <div className="row text-center ">
        <h2 className="quote">"{text}"</h2>
        <h5 className="quote">- {author}</h5>
      </div>
    </div>
  );
};

export default Quote;
