import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "../style.css";
import { auth } from "../firebase";
import firebase from "firebase/app";

function Login() {
  return (
    <div id="login__page">
      <div id="login__card">
        <h2>Welcome To Personal GOSSIP!</h2>
        <div
          className="login__button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br />
        <br />
        <div
          className="login__button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
