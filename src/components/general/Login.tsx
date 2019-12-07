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
import { Link } from "react-router-dom";
import "../../style.css/form.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions";

const Login = () => {
  const userInfo: any = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  const [email, setemail] = useState({ email: "" });
  const [password, setpassword] = useState({ password: "" });
  const [USERNAME, setUSERNAME] = useState("");

  useEffect(() => {
    // dispatch(login());
  }, []);

  const onChangeEmail = (e: any) => {
    console.log(e.target.value);
    setemail({ email: e.target.value });
  };

  const onChangePass = (e: any) => {
    console.log(e.target.value);
    setpassword({ password: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(
      login({ email: email, password: password }, (token: any) => {
        console.log(token.data.user.Name);
        setUSERNAME(token.data.user.Name);
      })
    );

    // console.log(userInfo.data);
  };

  return (
    <div>
      <h1>{USERNAME}</h1>
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
