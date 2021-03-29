import { UPDATE_LANG } from "../types";

const initialState = "en";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LANG:
      state = action.payload;
      return state;

    default:
      return state;
  }
};

export default reducer;
