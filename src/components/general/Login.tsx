import React, { Component } from "react";
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
export default class SignUp extends Component {
  render() {
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
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Button color="teal" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us?{" "}
              <Link to="signup">
                <a href="#">Sign Up</a>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
