import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../routes/Login/LoginPage";

import { UserContext } from "../context/Context";

import "../styles/style.css";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={setUser}>
          <Route exact path="/" component={Login} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
