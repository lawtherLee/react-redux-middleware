import { combineReducers } from "redux";
import channels from "./channels";
import { newsList } from "./newsList";

const reducer = combineReducers({
  channels,
  newsList,
});
export default reducer;
