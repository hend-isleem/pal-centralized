const initialState = {
  user: []
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      // console.log(action.payload);

      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
