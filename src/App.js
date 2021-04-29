import React from 'react';
import Main from './components/main/main';
import s from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className={s.App} >
      <Main />
    </div>
  );
}

export default App;
