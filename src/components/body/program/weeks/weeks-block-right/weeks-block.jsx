import React from 'react';
import s from '../../../../../App.module.css';
import style from './weeks-block.module.css';

const WeeksBlock = (props) => {
    return (
        <div className={style.weeksBlock}>
            <hr width='40px' />
            <div className={style.blockText}>
                <p className={`${style.week} + ${s.gray}`}>Неделя №{props.week}</p>
                <p className={style.text}>Красивая часть курса, которая помогает в успехе</p>
            </div>
        </div>
    )
}

export default WeeksBlock;