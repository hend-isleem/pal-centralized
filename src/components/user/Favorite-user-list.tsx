import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFavorite } from "../../actions";

const languageOptions = [{}];
const FavoriteUserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, []);

  return (
    <div>
      <Dropdown className="icon" icon="heart" options={languageOptions}>
        <Dropdown.Menu>
          <Dropdown.Item text="New" />
          <Dropdown.Item text="New" />
          <Dropdown.Item text="New" />
          <Dropdown.Item text="New" />
          <Dropdown.Item text="New" />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default FavoriteUserList;
