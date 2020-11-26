import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

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
    <Container fluid>
      <Row>
        <div className="col-md-6 d-none d-md-flex bg-image" />
        <div className="col-md-6 bg-light">
          <div className="login d-flex align-items-center py-5">
            <Container>
              <Row>
                <Col lg={10} xl={7} className="mx-auto">
                  <h3 className="display-4">Login</h3>
                  <Form>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="email"
                        type="email"
                        className="form-control border-0 shadow-sm px-4"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email Address"
                        required
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Form.Control
                        id="password"
                        type="password"
                        className="form-control border-0 shadow-sm px-4 text-primary"
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        required
                      />
                    </InputGroup>
                    <div className="custom-control custom-checkbox mb-3">
                      <Form.Control
                        id="rememberMe"
                        className="custom-control-input"
                        type="checkbox"
                        checked
                      />
                      <label
                        htmlFor="rememberMe"
                        className="custom-control-label"
                      >
                        Remember me
                      </label>
                    </div>
                    <Button
                      id="submit"
                      className="btn btn-primary btn-block text-uppercase mb-2 shadow-sm"
                      onClick={(event) => Submit(event, email, password)}
                      type="submit"
                    >
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Login;