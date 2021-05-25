import React from 'react';
import { Container } from 'react-bootstrap';
import About from './about/about';
import Advantages from './advantages/advantages';
import style from './body.module.css';
import Partners from './partners/partners';
import Program from './program/program';
import Start from './start/start';
import Teachers from './teachers/teachers';

let bodyArray = [
    <About />,
    <Start />,
    <Advantages />,
    <Partners />,
    <Program />,
    <Teachers />
]

let bodyDate = bodyArray.map(data => data)

const Body = () => {
    return (
        <Container className={style.body} fluid>
            {bodyDate}
        </Container>
    )
}

export default Body;
