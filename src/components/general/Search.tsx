import React, { useState } from "react";
import { Button, Menu, Dropdown, Icon, Grid, Input } from "semantic-ui-react";

// import { useSelector, useDispatch } from "react-redux";

// Majors : Media

// this the Option for Major
const majorOptions = [
  { key: "a1", value: "m1", text: "Achitecture" },
  { key: "a2", value: "m1", text: "Art" },
  { key: "a3", value: "m1", text: "Business" },
  { key: "a4", value: "m1", text: "Media" },
  { key: "a5", value: "m1", text: "Computer" },
  { key: "a6", value: "m1", text: "Science" },
  { key: "a7", value: "m1", text: "Medicine" },
  { key: "a8", value: "m1", text: "Languages" },
  { key: "a9", value: "m1", text: "Law" },
  { key: "a10", value: "m1", text: "Philosophy" },
  { key: "a11", value: "m1", text: "Political" },
  { key: "a12", value: "m1", text: "Tourisim" },
  { key: "a13", value: "m1", text: "Sports" },
  { key: "a14", value: "m1", text: "History" },
  { key: "a15", value: "m1", text: "Engineerong" },
  { key: "a16", value: "m1", text: "IT" },
  { key: "a17", value: "m1", text: "Education" },
  { key: "a18", value: "m1", text: "Literature" }
];

// this the Option for Type
const typesOptions = [
  { key: "a1", value: "t1", text: "Jerusalem" },
  { key: "a2", value: "t1", text: "Safed" },
  { key: "a3", value: "t1", text: "Haifa" },
  { key: "a4", value: "t1", text: "Bisan" },
  { key: "a5", value: "t1", text: "Akka" },
  { key: "a6", value: "t1", text: "Nablus" },
  { key: "a7", value: "t1", text: "Tulkarm" },
  { key: "a8", value: "t1", text: "Qalqilya" },
  { key: "a9", value: "t1", text: "Caesarea" },
  { key: "a10", value: "t1", text: "Ramallah" },
  { key: "a11", value: "t1", text: "Al-Bireh" },
  { key: "a12", value: "t1", text: "Al-Roll" },
  { key: "a13", value: "t1", text: "Jaffa" },
  { key: "a14", value: "t1", text: "Jericho" },
  { key: "a15", value: "t1", text: "Bethlehem" },
  { key: "a16", value: "t1", text: "Hebron" },
  { key: "a17", value: "t1", text: "Khan" },
  { key: "a18", value: "t1", text: "Rafah" },
  { key: "a19", value: "t1", text: "Beersheba" }
];

const Search = () => {
  // should rename this state
  let [majorQuerySearch, setMajorQuerySearch] = useState("");
  let [typeQuerySearch, setTypeQuerySearch] = useState("");
  let [enteredQuerySearch, setenteredQuerySearch] = useState("");

  // to take the value of dropdowns search by Type --------------------
  const hundleDropDownChangeByMajor = (e: any) => {
    setMajorQuerySearch(e.target.textContent);
  };

  // to take the value of dropdowns search by Type -----------------
  const hundleDropDownChangeByType = (e: any) => {
    setTypeQuerySearch(e.target.textContent);
  };

  // to take the value from input search field
  const hundleChange = (e: any) => {
    setenteredQuerySearch(e.target.value);
  };

  // Hundle the search button
  const onSearch = () => {
    console.log(majorQuerySearch, typeQuerySearch, enteredQuerySearch);
  };

  return (
    <div style={{ margin: "6rem auto 0 auto", width: "70%" }}>
      <div>
        <Menu pointing>
          {/* ------------------------------------ Search Dropdown--------------------------------- */}

          <Menu.Item>
            <Dropdown
              placeholder="choose Type..."
              fluid
              search
              selection
              options={majorOptions}
              onChange={hundleDropDownChangeByMajor}
            />
          </Menu.Item>
          {/* ------------------------------------ Search Dropdown--------------------------------- */}

          <Menu.Item>
            <Dropdown
              placeholder="choose major..."
              fluid
              search
              selection
              options={typesOptions}
              onChange={hundleDropDownChangeByType}
            />
          </Menu.Item>

          {/* ------------------------------------ Search Input--------------------------------- */}

          <Menu.Item>
            <Input placeholder="Search..." onChange={hundleChange} />
          </Menu.Item>

          {/* ------------------------------------ Search Button--------------------------------- */}
          <Menu.Menu position="right">
            <Menu.Item>
              <Button primary onClick={onSearch}>
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
