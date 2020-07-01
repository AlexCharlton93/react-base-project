import React, { useState } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import axios from 'axios';

const Submit = (e, email, password) => {
	e.preventDefault();
	axios.post('http://localhost:3001/api/1.0/auth/login', {
		emailAddress: email,
		password
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
};

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Row>
            <Col xs="12" md="6">
                Image here with overlay information
            </Col>
            <Col xs="12" md="6">
                <h2>Login</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me?" />
                    </Form.Group>
                    <Button
                        onClick={(e) => Submit(e, email, password)}
                        ariant="primary"
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}
