import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Task from "./Task";

//styled components

const Message = styled.h1`
  font-size: 1.8rem;
`;

const TaskList = ({ tasklist, setTaskList, setCurrentTask }) => {
  //state
  const [task, setTask] = useState({
    name: "",
    pomodoros: "",
    completed: 0,
  });
  const [empty, setEmpty] = useState(true);

  const { name, pomodoros } = task;

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    setTaskList([...tasklist, task]);
    setCurrentTask(task);
  };

  useEffect(() => {
    if (!(name === "")) {
      if (!(pomodoros === "")) {
        setEmpty(false);
      } else {
        setEmpty(true);
      }
    } else {
      setEmpty(true);
    }
  }, [task]);

  return (
    <div className="center">
      <div className="col center">
        <Message>Task list</Message>
        {tasklist.map((task) => (
          <Task
            key={task.name}
            task={task}
            tasklist={tasklist}
            setCurrentTask={setCurrentTask}
          />
        ))}
        <a
          className="btn-floating btn-large waves-effect waves-light teal modal-trigger"
          href="#addtask"
        >
          <i className="material-icons">add</i>
        </a>
      </div>
      <div className="col center"></div>
      <div id="addtask" className="modal bottom-sheet">
        <div className="modal-content">
          <form action="">
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <input
                  placeholder="Study physics"
                  id="task_name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="validate"
                />
                <label htmlFor="task_name">Task Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 offset-s3">
                <input
                  placeholder="8"
                  id="pomodoros"
                  type="number"
                  name="pomodoros"
                  className="validate"
                  value={pomodoros}
                  onChange={handleChange}
                />
                <label htmlFor="pomodoros">Estimated pomodoros</label>
              </div>
              <div className="input-field col s2 offset-s5">
                <a
                  href="#!"
                  onClick={addTask}
                  className="waves-effect waves-light btn modal-close"
                  disabled={empty}
                >
                  Add Task
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
