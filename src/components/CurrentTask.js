import React, { Fragment } from "react";
import styled from "@emotion/styled";

//styled components

const Text = styled.h1`
  font-size: 1.2rem; ;
`;

const CurrentTask = ({ currenttask }) => {
  const { name } = currenttask;

  return (
    <Fragment>
      <div className="center">
        <Text>
          Working on: <strong>{name}</strong>
        </Text>
      </div>
    </Fragment>
  );
};

export default CurrentTask;
