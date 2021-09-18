import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "../routes/public/Login/LoginPage";
import SignUp from "../routes/public/SignUp/SignUpPage";
import HabitsPage from "../routes/user/Habits/HabitsPage";

import { UserContext } from "../context/Context";

import "../styles/style.css";

export default function App() {
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={{ setUser }}>
          <Route exact path="/" component={Login} />
          <Route exact path="/cadastro" component={SignUp} />

          <UserContext.Provider value={{ user }}>
            <Route exact path="/habitos" component={HabitsPage} />
          </UserContext.Provider>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
