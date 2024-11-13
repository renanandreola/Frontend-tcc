import React from "react";
import "./Profile.css";
import Header from "../../layout/Header";
import Cookies from "js-cookie";

function Profile() {
  const token = Cookies.get("token");

  if (!token || token === undefined || token == null) {
    window.location.pathname = "/";
  }

  return (
    <>
      <Header></Header>
      <span>Profile</span>
    </>
  );
}

export default Profile;
