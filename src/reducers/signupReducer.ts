const initialState = {
  userName: null,
  userEmail: null,
  userPass: null
};

const signupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGN_UP":
      console.log("inside sugnup reducer");
      console.log(action.payload);

      return {
        ...state,
        userName: null,
        userEmail: null,
        userPass: null
      };
    default:
      return state;
  }
};

export default signupReducer;
