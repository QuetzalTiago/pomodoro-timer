import React from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

const clientId =
  "693535113278-jnt8heu25ilormffmthru6t0mrnectm8.apps.googleusercontent.com";

const LoginButton = () => {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res);
    localStorage.setItem("user", true);
    localStorage.setItem("userInfo", JSON.stringify(res.profileObj));
    refreshTokenSetup(res);
    window.location.reload();
    // let id_token = res.tokenObj.id_token;
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", "https://yourbackend.example.com/tokensignin");
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.onload = () => {
    //   console.log("Signed in as: " + xhr.responseText);
    // };
    // xhr.send("idtoken=" + id_token);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

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
