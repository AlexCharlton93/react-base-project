import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Forms from '../pages/Forms';
import FormBuilder from '../pages/FormBuilder';

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
            <Route path="/forms/:id">
              <FormBuilder />
            </Route>
            <Route path="/forms">
              <Forms />
            </Route>
        </Switch>
    );
}
