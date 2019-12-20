import {
  FETCH_POSTS,
  SIGN_IN,
  LOGOUT_SUCCESS,
  IS_LOGGED,
  SEARCH_START,
  SIGN_UP,
  FETCH_FAVORITE,
  FETCH_COMPANY_POSTS,
  FETCH_COMPANY_PROFILE,
  FETCH_USERS,
  CHANGE_FAV_STATUS,
  GOOGLE_SIGN_IN,
  ARCHIVE_POST
} from "./types";
import axios from "axios";

// FETCH THE POSTS
export const fetchPost = () => (dispatch: any) => {
  axios
    .get(`https://boiling-journey-53136.herokuapp.com/articles`)
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts.data
      });
    })
    .catch(err => console.log(err));
};

////---------------------------retriving User Profile-------------------------------////
export const fetchUser = (id: any) => (dispatch: any) => {
  axios
    .get(`https://seek-ps.herokuapp.com/user?id=${id}`)
    .then(users => {
      console.log(users);
      dispatch({
        type: FETCH_USERS,
        payload: users.data
      });
    })
    .catch(err => console.log(err));
};
////---------------------------retriving Company Profile-------------------------------////
export const fetchCompanyProfile = (id: any) => (dispatch: any) => {
  axios
    .get(`https://seek-ps.herokuapp.com/user?id=${id}`)
    .then(company => {
      console.log(company.data.user);
      dispatch({
        type: FETCH_COMPANY_PROFILE,
        payload: company.data ////
      });
    })
    .catch(err => console.log(err));
};

//LOGIN USER REQUEST
export const login = (userInfo: any, callback: any) => (dispatch: any) => {
  console.log("inside Login action");

  axios
    .post("https://seek-ps.herokuapp.com/user/signIn", {
      email: userInfo.email.email,
      passowrd: userInfo.password.password
    })
    .then(userToken => {
      console.log("this the user data from login action", userToken);
      dispatch({
        type: SIGN_IN,
        payload: userToken.data
      });
      callback(userToken.data);
    })
    .catch(err => console.log(err));
};

// Google Login

export const googleLogin = () => (dispatch: any) => {
  console.log("inside google action");
  axios
    .get("https://seek-ps.herokuapp.com/user/auth/google")
    .then(userToken => {
      console.log("this the user data from login action", userToken);
      dispatch({
        type: GOOGLE_SIGN_IN,
        payload: userToken.data
      });
      // callback(userToken.data);
    })
    .catch(err => console.log(err));
};

//SIGNUP USER REQUEST
export const signup = (userInfo: any, callback: any) => (dispatch: any) => {
  axios
    .post("https://seek-ps.herokuapp.com/user/signUp", {
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
  var url = [];
  if (searchInfo.major !== "") {
    url.push("major=" + searchInfo.major);
  }
  if (searchInfo.type !== "") {
    url.push("type=" + searchInfo.type);
  }
  if (searchInfo.enterQuery !== "") {
    url.push("enterQuery=" + searchInfo.enterQuery);
  }
  var URLl = "";
  for (var i = 0; i < url.length; i++) {
    if (i === 0) {
      URLl = "/?" + url[i];
    } else {
      URLl += "&&" + url[i];
    }
  }
  console.log(URLl);
  axios
    .get(`https://seek-ps.herokuapp.com/articles/search${URLl}`)
    .then(searchResult => {
      console.log("inside then search action");
      console.log(searchResult);
      dispatch({
        type: SEARCH_START,
        payload: searchResult.data
      });
    })
    .catch(err => console.log("inside catch search", err));
};

// Get the favorite list for the user
export const fetchFavorite = () => (dispatch: any) => {
  console.log("ID user from local storage", localStorage.getItem("userId"));
  const userId = localStorage.getItem("userId");
  axios
    .get(`https://seek-ps.herokuapp.com/articles/favoriteList?id=${userId}`)
    .then(favPosts => {
      console.log("inside then fav action", favPosts.data);
      dispatch({
        type: FETCH_FAVORITE,
        payload: favPosts.data
      });
    })
    .catch(err => {
      console.log("inside err favorite", err);
    });
};

//------------------------------------------ Fetch company posts ---------------------------------------------//

export const fetchCompanyPosts = () => (dispatch: any) => {
  console.log("ID user from local storage", localStorage.getItem("userId"));
  const userId = localStorage.getItem("userId");
  axios
    .get(`https://seek-ps.herokuapp.com/articles/?id=${userId}`)
    .then(Posts => {
      console.log("inside then company action", Posts.data);
      dispatch({
        type: FETCH_COMPANY_POSTS,
        payload: Posts.data
      });
    })
    .catch(err => {
      console.log("inside err favorite", err);
    });
};

//------------------------------------------ Archive Post ---------------------------------------------//

export const archivePost = (postId: any) => (dispatch: any) => {
  console.log(localStorage.getItem("userId"));
  const userId = localStorage.getItem("userId");

  const data = {
    postId: postId,
    userId: userId
  };
  // axios
  //   .get(`https://seek-ps.herokuapp.com/articles`) // Need to Edit
  //   .then(Posts => {
  //     console.log("inside then company action", Posts.data);
  //     dispatch({
  //       type: FETCH_COMPANY_POSTS, // this is right not wrong I need to yupdate the state
  //                                 //  of the company posts value to rerender the page and remove the post
  //       payload: Posts.data
  //     });
  //   })
  //   .catch(err => {
  //     console.log("inside err favorite", err);
  //   });
};
