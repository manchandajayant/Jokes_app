import { combineReducers } from "redux";
import user from "./userReducer";
import jokes from "./jokesReducer";
export default combineReducers({
  user,
  jokes,
});
