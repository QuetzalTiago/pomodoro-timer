import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "693535113278-jnt8heu25ilormffmthru6t0mrnectm8.apps.googleusercontent.com";

const onSuccess = () => {
  console.log("Logout made successfully");
  localStorage.setItem("user", false);
  localStorage.removeItem("userInfo");
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
