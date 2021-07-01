import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "../style.css";

function Login() {
  return (
    <div className="login__page">
      <div className="login__card">
        <h2>Welcome to chat Engine!</h2>
        <div className="login__button google">
          <GoogleOutlined />
          Sign In with Google
        </div>
        <br />
        <br />
        <div className="login__button google">
          <FacebookOutlined />
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
