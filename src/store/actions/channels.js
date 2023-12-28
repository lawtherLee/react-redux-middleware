import axios from "axios";
import { SET_CHANNELS } from "../actionType/channles";

export const setChannelsAction = () => {
  return async (dispatch) => {
    const { data: res } = await axios.get(
      "http://geek.itheima.net/v1_0/channels",
    );
    console.log(res);
    dispatch({
      type: SET_CHANNELS,
      payload: res.data.channels,
    });
  };
};
