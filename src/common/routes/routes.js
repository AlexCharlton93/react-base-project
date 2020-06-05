import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../../Pages/Home'
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';

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
