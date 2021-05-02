import React from 'react';
import { Col, Container } from 'react-bootstrap';
import MainButton from './button/button';
import style from './last-line.module.css';
import Line from './line/line';
import Students from './students/students';

const LastLine = () => {
    return (
        <Container className={style.lastLine} fluid>
            <Col className={style.col}><MainButton /></Col>
            <Col className={style.col}><Students /></Col>
            <Col className={style.col}><Line /></Col>
        </Container>
    )
}

export default LastLine;