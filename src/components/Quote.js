import React from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";

//styled components
const Text = styled.h2`
  font-weight: lighter;
  font-style: italic;
`;

const Author = styled.h5`
  font-weight: lighter;
`;

const Quote = ({ quote }) => {
  const { author, text } = quote;
  return (
    <div className="container pt-3">
      {quote ? (
        <div className="row text-center ">
          {text ? <Text>"{text}"</Text> : null}
          {author ? <Author>- {author}</Author> : null}
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Quote;
