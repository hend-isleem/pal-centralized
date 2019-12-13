import {
  FETCH_POSTS,
  SIGN_IN,
  LOGOUT_SUCCESS,
  IS_LOGGED,
  SEARCH_START,
  SIGN_UP,
  FETCH_FAVORITE
} from "./types";
import axios from "axios";

// FETCH THE POSTS
export const fetchPost = () => (dispatch: any) => {
  axios.get(`http://localhost:3004/articles`).then(posts => {
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
export const signup = (userInfo: any, callback: any) => (dispatch: any) => {
  axios
    .post("http://127.0.0.1:3004/user/signUp", {
      name: userInfo.userName.userName,
      type: userInfo.type,
      email: userInfo.email.email,
      passowrd: userInfo.password.password
    })
    .then(response => {
      console.log("inside then sign up action and the res : ", response);
      dispatch({
        type: SIGN_UP,
        payload: response.data
      });
      callback(response.data);
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

// To get the search result
export const search = (searchInfo: any) => (dispatch: any) => {
  console.log(searchInfo);
  console.log("inside search action");

  axios
    .get("http://127.0.0.1:3004/user/articles/search")
    .then(searchResult => {
      console.log("inside then search action");
      console.log(searchResult);
      dispatch({
        type: SEARCH_START,
        payload: searchResult.data
      });
    })
    .catch(err => console.log(err));
};

// Get the favorite list for the user
export const fetchFavorite = () => (dispatch: any) => {
  console.log("ID user from local storage", localStorage.getItem("userId"));
  const userId = localStorage.getItem("userId");
  axios
    .get(`http://localhost:3004/articles/favoriteList?id=${userId}`)
    .then(posts => {
      console.log("inside then fav action", posts);
      dispatch({
        type: FETCH_FAVORITE,
        payload: posts.data
      });
    })
    .catch(err => console.log(err));
};
