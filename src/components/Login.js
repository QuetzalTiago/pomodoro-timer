import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import styled from "@emotion/styled";

const Title = styled.p`
  font-size: 1.5rem;
`;

const Login = ({ loggedin, userinfo }) => {
  return (
    <div>
      <div className="row">
        <label htmlFor="account">
          {loggedin ? (
            <Title className="center">Welcome back, {userinfo.givenName}</Title>
          ) : (
            <Title className="center">My account</Title>
          )}
        </label>
        <div className="center" id="account">
          {loggedin ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
};

export default Login;
