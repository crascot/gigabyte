import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import s from '../../../App.module.css';
import style from './footer.module.css';
import Networks from './networks/networks';

const Footer = () => {
    return (
        <Row className={style.footer}>
            <Col className={style.text}>
                <h1 className={s.w700}>Статьи каждую неделю</h1>
                <p className={`${s.gray} + ${s.w400}`}>Больше 90% учеников прошли
                полный курс и смогли собрать свой первый компьютер
                </p>
            </Col>
            <Col className={style.form}>
                <input type='text' placeholder='E-mail' />
                <Button>Подписаться</Button>
            </Col>

            <Networks />
        </Row>
    )
}

export default Footer;