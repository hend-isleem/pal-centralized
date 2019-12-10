import { FETCH_POSTS, SIGN_IN, LOGOUT_SUCCESS, IS_LOGGED } from "./types";
import axios from "axios";

export const fetchPost = () => (dispatch: any) => {
  axios.get(`http://localhost:3004/articles`).then(posts => {
    // console.log(posts);
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    });
  });
};

export const login = (userInfo: any, callback: any) => (dispatch: any) => {
  axios
    .post("http://127.0.0.1:3004/user/signIn", {
      email: userInfo.email.email,
      passowrd: userInfo.password.password
    })
    .then(userToken => {
      dispatch({
        type: SIGN_IN,
        payload: userToken.data
      });
      callback(userToken.data);
    })
    .catch(err => console.log(err));
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const isLogged = () => {
  return {
    type: IS_LOGGED
  };
};
