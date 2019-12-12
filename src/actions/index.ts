import {
  FETCH_POSTS,
  SIGN_IN,
  LOGOUT_SUCCESS,
  IS_LOGGED
} from "./types";
import axios from "axios";

// FETCH THE POSTS
export const fetchPost = () => (dispatch: any) => {
  axios.get(`http://localhost:3004/articles`).then(posts => {
    console.log(posts);
    dispatch({
      type: FETCH_POSTS,
      payload: posts.data
    });
  });
};

//LOGIN USER REQUEST
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

//SIGNUP USER REQUEST
export const signup = (/*userInfo: any, callback: any */) => (
  dispatch: any
) => {
  console.log("inside sign up action");
  // console.log(userInfo);

  axios
    .post("http://127.0.0.1:3004/user/signUp", {
      // userName: userInfo.userName.userName,
      // email: userInfo.email.email,
      // passowrd: userInfo.password.password
      userName: "Mohammad",
      email: "mohammad@mohammad.com",
      passowrd: "sleepy"
    })
    .then(response => {
      // dispatch({
      //   type: SIGN_UP,
      //   payload: userToken.data
      // });
      // callback(userToken.data);
      console.log(response);
    })
    .catch(err => console.log(err));
};

//LOGOUT USER
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

// TO CHECK ID THE USER LOGIN OR NOT
export const isLogged = () => {
  return {
    type: IS_LOGGED
  };
};
