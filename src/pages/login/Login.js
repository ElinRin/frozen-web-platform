import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { UserInfoContext } from "../../app/Context";
import { loginUser } from "../../actions/user";
import firebase from "firebase";
import "./Login.css";
export const Login = ({ history }) => {
  const [userInfo, userInfoDispatch] = useContext(UserInfoContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    loginUser({ email, password }, userInfoDispatch).then(data => {
      const uid = firebase.auth().currentUser.uid;

      history.push(`./employee/${uid}`);
    });
  };

  return (
    <div className="login-container">
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({ currentTarget: { value } }) => setEmail(value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({ currentTarget: { value } }) => setPassword(value)}
          />
        </FormGroup>
        <Button color="primary">Log in</Button>
        <Button color="link" size="sm">
          Forgot password?
        </Button>
      </Form>
    </div>
  );
};
