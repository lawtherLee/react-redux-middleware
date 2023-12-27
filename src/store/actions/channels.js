import { SET_CHANNELS } from "../actionType/channles";

export const setChannelsAction = (payload) => {
  return {
    type: SET_CHANNELS,
    payload,
  };
};
