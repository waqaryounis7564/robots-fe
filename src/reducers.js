import { Search_Field } from "./constants";

const InitialState = {
  searchfield: ""
};
export const searchRobots = (state = InitialState, action = {}) => {
  if (action.type === Search_Field) {
    return { ...state, searchfield: action.payload };
  }

  return state;
};
