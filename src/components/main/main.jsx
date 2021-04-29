import React from 'react';
import Course from './course/course';
import LastLine from './main-last-line/last-line';
import MainMenu from './main-menu/main-menu';
import style from './main.module.css';

const Head = () => {
    return (
        <div className={style.main}>
            <MainMenu />
            <Course />
            <LastLine />
        </div>
    )
}

export default Head;