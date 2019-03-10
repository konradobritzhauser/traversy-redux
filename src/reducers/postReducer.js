import { NEW_POST, FETCH_POSTS } from "../actions/types";

const initialState = { items: [], item: {} };

const postReducer = function(state = initialState, action) {
  switch (action.type) {
    case NEW_POST:
    return
    case FETCH_POSTS:
      return { ...state, items: action.payload };

    default:
      return state;
  }
};

export default postReducer;
