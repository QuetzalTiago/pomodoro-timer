import React, { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styled from "@emotion/styled";

const Title = styled.p`
  font-size: 1.5rem;
`;

const Login = ({ loggedin, setLoggedIn }) => {
  const [error, guardarError] = useState(false);
  const [datos, guardarDatos] = useState({
    user: "",
    pass: "",
  });
  const { user, pass } = datos;

  const handleChange = (e) => {
    console.log(e.target.name);
    guardarDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const enviarForm = () => {
    if (user.trim() === "" || pass.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    //google
  };

  return (
    <div>
      {/* {error ? <h1>Todos los campos son obligatorios</h1> : null}
      <div className="row">
        <div className="col-md-12 mb-2">
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name={"user"}
            value={user}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <FormControl
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            name={"pass"}
            value={pass}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <Button variant="primary" size="lg" onClick={enviarForm}>
            Login
          </Button>{" "}
        </div>
      </div> */}

      <div className="row">
        <label htmlFor="account">
          <Title className="center">My account</Title>
        </label>
        <div className="center" id="account">
          {loggedin ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
};

export default Login;
