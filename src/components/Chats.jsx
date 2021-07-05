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

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
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
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key": "72288994-c2e0-401b-93ab-3f5d91738a23",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  if (!user || loading) return "Loading...";
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
        projectID="316146e5-2748-4e7c-a5b4-cf4c02930fb2"
        userName="{user.email}"
        userSecret="{user.uid}"
      />
    </div>
  );
}

export default Chats;
