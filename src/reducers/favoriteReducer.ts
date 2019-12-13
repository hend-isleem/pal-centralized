const initialState = {
  posts: []
};

const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_FAVORITE":
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

export default favoriteReducer;
