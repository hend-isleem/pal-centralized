import { FETCH_POSTS, SIGN_IN } from "./types";
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
  // console.log(userInfo);

  axios
    .post("http://127.0.0.1:3004/user/signIn", {
      email: "Maria_Turner40@yahoo.com",
      passowrd: "sleepy"
    })
    .then(userToken => {
      console.log("inside then");

      dispatch({
        type: SIGN_IN,
        payload: userToken.data
      });
      callback(userToken);
    })
    .catch(err => console.log(err));
};
