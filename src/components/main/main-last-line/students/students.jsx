import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import s from '../../../../App.module.css';
import style from './students.module.css';

const Students = () => {
    return (
        <Container className={style.students} fluid>
            <Row>
                <Col className={`${style.all} + ${s.gray} + ${s.w400}`}>Учеников всего:</Col>
                <Col className={`${style.num} + ${s.w700}`}>200</Col>
            </Row>
            <Row>
                <Col className={`${style.all} + ${s.gray} + ${s.w400}`}>Успешно закончили курс:</Col>
                <Col className={`${style.num} + ${s.w700}`}>190</Col>
            </Row>
        </Container>
    )
}

export default Students;