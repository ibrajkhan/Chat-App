import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Chats from "./Chats";

function App() {
  return (
    <div style={{ fontFamily: "Avenir" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" component={Login} />
            <Route Path="/chats" component={Chats} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
