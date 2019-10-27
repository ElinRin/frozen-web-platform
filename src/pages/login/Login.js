import React, {useState, useContext, useEffect} from "react";
import {navigate} from "hookrouter";
import {Button, Form, FormGroup, Input} from "reactstrap";
import {ProfileContext} from "../../app/Context";
import {loginUser} from "../../actions/user";
import "./Login.css";

export const Login = ({history}) => {
  const [profile, profileDispatch] = useContext(ProfileContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async event => {
    event.preventDefault();
    await loginUser({email, password}, profileDispatch);
  };

  const testLogin = async () => {
    await loginUser({
      email: 'hradmin@telekom.com',
      password: 'hradmin'
    }, profileDispatch);
  };

  useEffect(() => {
    if (profile.userId && profile.userId.length) {
      navigate("./main", true);
    }
  }, [history, profile.userId]);

  return (
    <div className="login-container">
      <Form className="login-form"
            onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={({currentTarget: {value}}) => setEmail(value)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={({currentTarget: {value}}) => setPassword(value)}
          />
        </FormGroup>
        <Button color="primary">Log in</Button>
        <Button color="link" size="sm">
          Forgot password?
        </Button>
      </Form>

      <Button onClick={testLogin} color="primary">Guest log in</Button>
    </div>
  );
};
