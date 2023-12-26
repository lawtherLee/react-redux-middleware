import {ADD} from "../actionType/count";

const count = (state = 0,{type,payload}) => {
  if (type === ADD){
  return state + 1
  }
  return state
}
export default count