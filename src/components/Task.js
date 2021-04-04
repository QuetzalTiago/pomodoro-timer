import React from "react";
import styled from "@emotion/styled";

//styled components

const Button = styled.a`
  width: 300px;
  margin-bottom: 1rem;
`;

const Task = ({ task, tasklist, setCurrentTask }) => {
  const changeTask = (name) => {
    let result = tasklist.filter((task) => task.name === name);
    setCurrentTask(result[0]);
  };
  const { name } = task;
  return (
    <div className="center">
      <Button
        className="waves-effect waves-light btn"
        onClick={() => {
          changeTask(name);
        }}
      >
        {name}
      </Button>
    </div>
  );
};

export default Task;
