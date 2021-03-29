import {
  FETCH_CURRENT_USER,
  DELETE_CURRENT_USER,
  UPDATE_CURRENT_USER,
} from "../types";

const initialState = {
  id: "",
  name: "",
  username: "",
  email: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      state = action.payload;
      return state;

    case DELETE_CURRENT_USER:
      state = initialState;
      return state;

    case UPDATE_CURRENT_USER:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default reducer;
