import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
export const Login = () => (
  <Form>
    <FormGroup>
      <Input type="email" placeholder="Email" />
    </FormGroup>
    <FormGroup>
      <Input type="password" placeholder="Password" />
    </FormGroup>
    <FormGroup>
      <Button color="primary">Log in</Button>
    </FormGroup>
  </Form>
);
