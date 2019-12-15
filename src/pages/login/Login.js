import React, { useState, useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import { navigate } from "hookrouter";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { firebaseTools } from "../../utils/firebase";
import { ProfileContext } from "../../app/Context";
import { loginUser, loginUserByToken } from "../../actions/user";
import "./Login.css";

export const Login = ({ history }) => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [profile, profileDispatch] = useContext(ProfileContext);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!(profile.userId && profile.userId.length)) {
    if (cookies.token) {
      loginUserByToken(cookies.token, profileDispatch);
      navigate("./main", true);
    }
  }

  const handleSubmit = async event => {
    event.preventDefault();
    if (
      email &&
      email.trim().length > 0 &&
      password &&
      password.trim().length > 0
    ) {
      await loginUser({ email, password }, profileDispatch);

      if (!firebaseTools.currentUser()) {
        setError(true);
      } else {
        firebaseTools
          .currentUser()
          .getIdToken()
          .then(token => {
            setCookie("token", token, {
              path: "/"
            });
          });
      }
    }
  };

  const testLogin = async () => {
    await loginUser(
      {
        email: "guest@telekom.com",
        password: "guest1"
      },
      profileDispatch
    );

    firebaseTools
      .currentUser()
      .getIdToken()
      .then(token => {
        setCookie("token", token, {
          path: "/"
        });
      });
  };

  useEffect(() => {
    if (profile.userId && profile.userId.length) {
      navigate("./main", true);
    }
  }, [history, profile.userId]);

  return (
    <div className="login-container">
      <div className="login-form-container">
        <Form className="login-form" onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={({ currentTarget: { value } }) => {
                setError(false);
                setEmail(value);
              }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ currentTarget: { value } }) => {
                setError(false);
                setPassword(value);
              }}
            />
          </FormGroup>
          <Button color="primary">Log in</Button>
        </Form>

        <div className="error">
          {error && (
            <span>
              Неверный логин или пароль. Если Вы не помните свои данные для
              входа, обратитесь к вашему hr.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
