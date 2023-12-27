import { SET_CHANNELS } from "../actionType/channles";

const initState = {
  list: [],
};

const channels = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CHANNELS:
      return {
        list: payload,
      };
  }
  return state;
};
export default channels;
