import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import "../style.css";

function Chats() {
  const history = useHistory();
  const handelLogOut = async () => {
    await auth.signOut();
    history.push("/");
  };
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
