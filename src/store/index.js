import { combineReducers } from "redux";
import user from "../reducers/user";
import mentor from "../reducers/mentor";
import axios from "axios";

axios.defaults.baseURL = "https://api.starting.link";
axios.defaults.withCredentials = true;

const rootReducer = combineReducers({
  user,
  mentor,
});

export default rootReducer;
