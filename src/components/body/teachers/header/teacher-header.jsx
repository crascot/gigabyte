import React from 'react';
import { Col, Image } from 'react-bootstrap';
import s from '../../../../App.module.css';
import style from './teachers-header.module.css';
import svg from '../../../../svg/fast-start.svg';

const TeachersHeader = () => {
    return (
        <Col className={style.teachersHeader}>
            <Image src={svg} className={style.img} />
            <h1 className={s.w700}>Ваши преподаватели</h1>
        </Col>
    )
}

export default TeachersHeader;