import { SET_NEWS } from "../actionType/news";

const initState = {
  news: [],
};
export const newsList = (state = initState, { type, payload }) => {
  if (type === SET_NEWS) {
    return {
      ...state,
      news: payload,
    };
  }
  return state;
};
