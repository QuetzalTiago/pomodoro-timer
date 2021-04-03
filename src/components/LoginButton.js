import React from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "693535113278-jnt8heu25ilormffmthru6t0mrnectm8.apps.googleusercontent.com";

const onSuccess = (res) => {
  console.log("Login Success: currentUser:", res);
  localStorage.setItem("user", true);
  refreshTokenSetup(res);
  window.location.reload();
};

const onFailure = (res) => {
  console.log("Login failed: res:", res);
};

const LoginButton = () => {
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google account"
        onFailure={onFailure}
        onSuccess={onSuccess}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default LoginButton;
