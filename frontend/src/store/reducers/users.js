import { FETCH_USERS, DELETE_USERS, ADD_USER, UPDATE_USER } from "../types";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      state = action.payload;
      return state;
    case DELETE_USERS:
      state = initialState;
      return state;
    case ADD_USER:
      return [...state, action.payload];
    case UPDATE_USER:
      const updatedUsers = state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updatedUsers;
      return state;

    default:
      return state;
  }
};

export default reducer;
