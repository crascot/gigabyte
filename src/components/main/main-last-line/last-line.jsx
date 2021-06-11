import React from 'react';
import { Col, Container } from 'react-bootstrap';
import MainButton from './button/button';
import style from './last-line.module.css';
import Line from './line/line';
import Students from './students/students';

let lastLineArray = [
    <MainButton />,
    <Students />,
    <Line />
]

let lastLineData = lastLineArray.map((data, index) => <Col className={style.col} key={index} >{data}</Col>);

const LastLine = () => {
    return (
        <Container className={style.lastLine} fluid>
            {lastLineData}
        </Container>
    )
}

export default LastLine;