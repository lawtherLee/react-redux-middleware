import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCountAction} from "./store/actions/count";

const App = () => {
 
 const {count} = useSelector(state => state)
  
  const dispatch = useDispatch()
  return (
    <div>
      {count}
      <button onClick={() => dispatch(addCountAction())}>++</button>
    </div>
  );
};

export default App;