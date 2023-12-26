import React from 'react';
import Channel from "./components/Channel";
import NewsList from "./components/NewsList";
import './styles/index.css'
const App = () => {
  return (
    <div className={'app'}>
      <Channel/>
      <NewsList/>
    </div>
  );
};

export default App;