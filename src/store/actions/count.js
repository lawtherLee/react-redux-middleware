import { ADD } from "../actionType/count";

export const addCountAction = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD,
      });
    }, 500);
  };
};
