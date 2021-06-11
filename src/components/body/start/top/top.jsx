import React from 'react';
import { Image, Col } from 'react-bootstrap';
import s from '../../../../App.module.css';
import style from './top.module.css';
import svg from '../../../../svg/fast-start.svg';

const Top = () => {
    return (
        <Col className={style.top}>
            <div className={style.topContent}>
                <div className={style.fastStart}>
                    <Image src={svg} />
                    <h1 className={s.w700}>Быстрый старт</h1>
                </div>

                <p className={`${style.text} + ${s.w400} + ${s.gray}`}>Больше 90% учеников прошли полный курс и смогли
                собрать свой первый компьютер
            </p>
            </div>
        </Col>
    )
}

export default Top;
