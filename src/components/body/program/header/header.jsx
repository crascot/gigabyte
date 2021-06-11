import React from 'react';
import { Image } from 'react-bootstrap';
import s from '../../../../App.module.css';
import style from './header.module.css';
import svg from '../../../../svg/fast-start.svg';

const Header = () => {
    return (
        <div className={style.programHeader}>
            <Image className={style.img} src={svg} />
            <h1 className={s.w700}>Программа обучения</h1>
            <p className={`${s.w400} + ${s.gray}`}>Больше 90% учеников прошли полный курс
            и смогли собрать свой первый компьютер
            </p>
        </div>
    )
}

export default Header;