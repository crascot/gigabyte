import React from 'react';
import s from '../../../../../App.module.css';
import style from './weeks-block.module.css';

const WeeksBlock = (props) => {
    return (
        <div className={style.weeksBlock}>
            <div className={style.blockText}>
                <p className={`${style.week} + ${s.gray}`}>Неделя №<span>{props.week}</span></p>
                <p className={style.text}>Красивая часть курса, которая помогает в успехе</p>
            </div>
            <hr width='40px' />
        </div>
    )
}

export default WeeksBlock;