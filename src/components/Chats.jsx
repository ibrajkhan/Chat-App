import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import "../style.css";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

function Chats() {
  const { user } = useAuth();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const handelLogOut = async () => {
    await auth.signOut();
    history.push("/");
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://chatengine.io/users/me", {
        headers: {
          "project-id": "316146e5-2748-4e7c-a5b4-cf4c02930fb2",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      });
  }, [user, history]);
  return (
    <div className="chats__page">
      <div className="nav__bar">
        <div className="logo__tab">Chat Engine</div>
        <div onClick={handelLogOut} className="logout__tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="316146e5-2748-4e7c-a5b4-cf4c02930fb2"
        userName="."
        userSecret="."
      />
    </div>
  );
}

export default Chats;
