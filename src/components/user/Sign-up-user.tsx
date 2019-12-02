import React, { Component } from "react";
import { Button, Form, Header, Icon } from "semantic-ui-react";

import "../../style.css/form.css";
export default class signUpCompany extends Component {
  render() {
    return (
      <div>
        <Form className="center-form">
          <Header as="h1" style={{ fontSize: "35px" }}>
            SIGN UP
          </Header>
          <Button color="google plus" style={{ marginBottom: "3rem" }}>
            <Icon name="google" /> Sign Up with Google
          </Button>
          <Form.Input label="User name" placeholder="User name" />
          <Form.Input label="Email" placeholder="joe@schmoe.com" />
          <Form.Input label="Password" placeholder="Password" type="password" />
          <Button type="submit" style={{ marginTop: "2rem" }}>
            sign up
          </Button>
        </Form>{" "}
      </div>
    );
  }
}
