import { SET_ACTIVE, SET_CHANNELS } from "../actionType/channles";

const initState = {
  list: [],
  active: 0,
};

const channels = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_CHANNELS:
      return {
        ...state,
        list: payload,
      };
    case SET_ACTIVE:
      return {
        ...state,
        active: payload,
      };
  }
  return state;
};
export default channels;
