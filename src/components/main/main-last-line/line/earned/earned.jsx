import React from 'react';
import { Col, Row } from 'react-bootstrap';
import s from '../../../../../App.module.css';
import style from './earned.module.css';

const Earned = () => {
    return (
        <Row className={style.earned}>
            <Col className={`${style.text} + ${s.gray} + ${s.w400}`}>Заработано учениками:</Col>
            <Col className={s.w400}>400 000₽</Col>
        </Row>
    )
}

export default Earned;