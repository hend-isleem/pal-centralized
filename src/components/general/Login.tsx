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
  const posts: any = useSelector((state: any) => state.posts);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // dispatch(login());
  }, []);

  const onChange = (e: any) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("inside on submite");

    dispatch(login({ email: "Destany_Ruecker@yahoo.com", password: "sleepy" }));
  };

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
                onChange={onChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={onChange}
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
