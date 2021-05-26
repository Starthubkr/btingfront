import { combineReducers } from "redux";
import user from "../reducers/user";
import mentor from "../reducers/mentor";
import axios from "axios";

axios.defaults.baseURL =
  "http://ec2-13-209-89-78.ap-northeast-2.compute.amazonaws.com";
axios.defaults.withCredentials = true;

const rootReducer = combineReducers({
  user,
  mentor,
});

export default rootReducer;
