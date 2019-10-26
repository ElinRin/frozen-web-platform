import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./Login.css";
export const Login = () => (
  <div className="login-container">
    <Form className="login-form">
      <FormGroup>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button color="primary">Log in</Button>
      <Button color="link" size="sm">
        Forgot password?
      </Button>
    </Form>
  </div>
);
