import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import s from '../../../../../App.module.css';
import style from './progress.module.css';

const Progress = () => {
    return (
        <div>
            <ProgressBar className={style.progressBar} now={70} />
            <div className={style.num}>
                <p className={s.gray}>0</p>
                <p className={s.gray}>1 000 000₽</p>
            </div>
        </div>
    )
}

export default Progress;