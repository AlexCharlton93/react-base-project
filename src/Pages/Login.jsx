import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import axios from 'axios';

// TODO: This needs refactoring to be broken into it's own api/actions/reducers layer
const Submit = async (e, email, password) => {
  e.preventDefault();
  try {
    const response = await axios.post(
      'http://localhost:3001/api/1.0/auth/login',
      {
        emailAddress: email,
        password,
      }
    );

    // TODO: Set token in local storage or similar?
    console.log('token', response.data.token);
  }
  catch (error) {
    console.log(error);
  }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 mx-auto">
                  <h3 className="display-4">Split page!</h3>
                  <p className="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                  <form>
                    <div className="form-group mb-3">
                      <input id="inputEmail" type="email" placeholder="Email address" required="" className="form-control rounded-pill border-0 shadow-sm px-4" />
                    </div>
                    <div className="form-group mb-3">
                      <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                    </div>
                    <div className="custom-control custom-checkbox mb-3">
                      <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                      <label htmlFor="customCheck1" className="custom-control-label">Remember password</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;