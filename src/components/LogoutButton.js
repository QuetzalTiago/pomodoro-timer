import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

const onSuccess = () => {
  console.log("Logout made successfully");
  localStorage.setItem("user", false);
  window.location.reload();
};

const LogoutButton = () => {
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout of Google account"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
};

export default LogoutButton;
