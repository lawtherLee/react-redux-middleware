import { SET_NEWS } from "../actionType/news";
import axios from "axios";

export const setNewsAction = (payload) => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://geek.itheima.net/v1_0/articles?channel_id=${payload}&timestamp=${Date.now()}`,
    );
    dispatch({
      type: SET_NEWS,
      payload: res.data.data.results,
    });
  };
};
