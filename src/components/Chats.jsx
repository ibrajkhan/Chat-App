import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import auth from "../firebase";

function Chats() {
  return (
    <div className="chat__page">
      <div className="nav__bar">
        <div className="logo__tab">Chat Engine</div>
        <div className="logout__tab">Logout</div>
      </div>
      <ChatEngine />
    </div>
  );
}

export default Chats;
