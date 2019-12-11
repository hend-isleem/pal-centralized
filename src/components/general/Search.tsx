import React from "react";
import { Button, Menu, Dropdown, Icon, Grid, Input } from "semantic-ui-react";

// import { useSelector, useDispatch } from "react-redux";

const Search = () => {
  return (
    <div style={{ margin: "6rem auto 0 auto", width: "70%" }}>
      <div>
        <Menu pointing>
          {/* ------------------------------------ Search Dropdown--------------------------------- */}

          <Menu.Item>
            <Dropdown text="search by ....">
              <Dropdown.Menu>
                <Dropdown.Item text="option 1" />
                <Dropdown.Item text="option 2" />
                <Dropdown.Item text="option 3" />
                <Dropdown.Item text="option 4" />
                <Dropdown.Item text="option 5" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
          {/* ------------------------------------ Search Dropdown--------------------------------- */}

          <Menu.Item>
            <Dropdown text="search by ....">
              <Dropdown.Menu>
                <Dropdown.Item text="option 1" />
                <Dropdown.Item text="option 2" />
                <Dropdown.Item text="option 3" />
                <Dropdown.Item text="option 4" />
                <Dropdown.Item text="option 5" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>

          {/* ------------------------------------ Search Input--------------------------------- */}

          <Menu.Item>
            <Input placeholder="Search..." />
          </Menu.Item>

          {/* ------------------------------------ Search Button--------------------------------- */}
          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary>
                <Grid columns={2} divided>
                  <Grid.Column>Search</Grid.Column>
                  <Grid.Column>
                    <Icon inverted name="search" />
                  </Grid.Column>
                </Grid>
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>{" "}
    </div>
  );
};

export default Search;
