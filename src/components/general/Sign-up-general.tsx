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
import "../../style.css/form.css";
import "./Sign-up-general.css";
export default class SignUp extends Component {
  render() {
    return (
      <div>
        {/* <Form className="center-form">
          <Header as="h1" style={{ fontSize: "40px", marginTop: "4rem" }}>
            SIGN UP
          </Header>

          <Button.Group style={{ marginTop: "7rem" }}>
            <Link to="/signupuser">
              <Button className="button-signup-login-g">User</Button>
            </Link>

            <Button.Or />
            <Link to="/signupcompany">
              <Button className="button-signup-login-g">Company</Button>
            </Link>
          </Button.Group>
        </Form> */}
        <Grid
          textAlign="center"
          style={{ height: "75vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 550 }}>
            <Form size="large">
              <Segment stacked>
                <Header
                  as="h2"
                  color="teal"
                  textAlign="center"
                  style={{ marginTop: "2rem" }}
                >
                  SIGN UP
                </Header>

                <Button.Group style={{ marginTop: "3rem" }}>
                  <Link to="/signupuser">
                    <Button color="teal" fluid size="large">
                      User
                    </Button>
                  </Link>

                  <Button.Or />
                  <Link to="/signupcompany">
                    <Button color="teal" fluid size="large">
                      Company
                    </Button>
                  </Link>
                </Button.Group>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
