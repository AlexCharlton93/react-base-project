import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../../Pages/home/home'
import Login from '../../Pages/login/login';
import Register from '../../Pages/register/register';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
        </Switch>
    );
}