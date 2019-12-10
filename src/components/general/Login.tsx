import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  Icon
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import "../../style.css/form.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions";

const Login = (props: any) => {
  const dispatch = useDispatch();
  let isLogged: any = useSelector((state: any) => state.user.isLogged);
  // console.log(isLogged);
  let userName: any = useSelector((state: any) => state.user.userName);
  // console.log(userName);

  const [email, setemail] = useState({ email: "" });
  const [password, setpassword] = useState({ password: "" });

  useEffect(() => {
    // dispatch(login());
  }, []);

  const onChangeEmail = (e: any) => {
    setemail({ email: e.target.value });
  };

  const onChangePass = (e: any) => {
    setpassword({ password: e.target.value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      login({ email: email, password: password }, (userInfo: any) => {
        console.log(userInfo);
        props.history.push("/");
      })
    );
  };

  if (isLogged) return <Redirect to="/" />;

  return (
    <div>
      <Grid
        textAlign="center"
        style={{ height: "75vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as="h2" color="teal" textAlign="center">
            Log-in to your account
          </Header>
          <Form size="large" onSubmit={onSubmit}>
            <Segment stacked>
              <Button color="google plus" style={{ marginBottom: "2rem" }}>
                <Icon name="google" /> Login using Google
              </Button>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User Name"
                onChange={onChangeEmail}
                name="email"
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChangePass}
                name="password"
              />
              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?<Link to="signup">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
