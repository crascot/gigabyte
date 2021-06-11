import React from 'react';
import Main from './components/main/main';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './components/body/body';


function App() {
  return (
    <div className={s.App} >
      <Main />
      <Body />
    </div>
  );
}

export default App;
