import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "../style.css";

function Login() {
  return (
    <div id="login__page">
      <div id="login__card">
        <h2>Welcome to chat Engine!</h2>
        <div className="login__button google">
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div className="login__button facebook">
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
