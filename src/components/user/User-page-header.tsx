import React from "react";
import { Container, Dropdown, Image, Menu, MenuItem } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import "../../style.css/form.css";
import UserFavoriteList from "./Favorite-user-list";
import { useDispatch } from "react-redux";
import { logout } from "../../actions";

const UserPageHeader = () => {
  // const userName: any = useSelector((state: any) => state.user.userName);
  let userName: any = localStorage.getItem("userName");
  const dispatch = useDispatch();
  const trigger = (
    <span>
      <Image avatar src="../../avatar2.png" /> {userName}
    </span>
  );

  // const LogoImg = () => (
  //   <Image
  //     src="https://react.semantic-ui.com/images/wireframe/square-image.png"
  //     size="medium"
  //     circular
  //   />
  // );

  const handleClick = (e: any) => {
    console.log(e.target.id);
    if (e.target.id == "sign-out") {
      dispatch(logout());
      return <Redirect to="/" />;
    }
  };

  return (
    <div>
      <Menu fixed="top" inverted style={{ height: "4.5rem" }}>
        <Container>
          {/* <Menu.Item position="left">
            <Dropdown
              trigger={trigger}
              options={options}
              pointing="top left"
              icon={null}
            />
          </Menu.Item> */}

          <MenuItem>
            <Dropdown trigger={trigger} pointing="top left" icon={null}>
              <Dropdown.Menu>
                <Dropdown.Header />
                <Dropdown.Item id="account" onClick={handleClick}>
                  Account
                </Dropdown.Item>
                <Dropdown.Item id="favorite" onClick={handleClick}>
                  Favorite
                </Dropdown.Item>
                <Dropdown.Item id="edit" onClick={handleClick}>
                  Edit Account
                </Dropdown.Item>
                {/* <Link to="/"> */}
                <Dropdown.Item id="sign-out" onClick={handleClick}>
                  Sign Out
                </Dropdown.Item>
                {/* </Link> */}
              </Dropdown.Menu>
            </Dropdown>
          </MenuItem>

          <Menu.Item>
            <UserFavoriteList />
          </Menu.Item>

          <Menu.Item as="a" header position="right">
            <Link to="/">
              <Image
                size="mini"
                src="https://image.shutterstock.com/image-vector/education-logo-template-260nw-1075581467.jpg"
              />
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
};

export default UserPageHeader;
