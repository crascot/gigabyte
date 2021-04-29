import React from 'react';
import MainMenu from './main-menu/main-menu';
import style from './main.module.css';

const Head = () => {
    return (
        <div className={style.main}>
            <MainMenu />
        </div>
    )
}

export default Head;