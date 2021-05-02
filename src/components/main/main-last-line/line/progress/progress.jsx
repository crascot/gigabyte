import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import style from './progress.module.css';

const Progress = () => {
    return (
        <div>
            <ProgressBar className={style.progressBar} now={70} />
            <div className={style.num}>
                <p>0</p>
                <p>1 000 000₽</p>
            </div>
        </div>
    )
}

export default Progress;