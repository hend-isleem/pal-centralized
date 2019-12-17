import React from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "../../style.css/form.css";
import { Link } from "react-router-dom";

const UserPageFooter = () => {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={5}>
              <Link to="/aboutus">
                <Header inverted as="h4" content="About Us" />
              </Link>
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="Contact Us" />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header inverted as="h4" content="CopyRight" />
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
};

export default UserPageFooter;
