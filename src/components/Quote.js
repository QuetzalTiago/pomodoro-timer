import React, { Fragment } from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";

//styled components
const Text = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
  font-style: italic;
`;

const Author = styled.h5`
  font-weight: lighter;
  font-size: 1.2rem;
`;

const Quote = ({ quote }) => {
  const { author, text } = quote;
  return (
    <Fragment>
      {quote ? (
        <div className="row center ">
          {text ? <Text>"{text}"</Text> : null}
          {author ? <Author>- {author}</Author> : null}
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}
    </Fragment>
  );
};

export default Quote;
