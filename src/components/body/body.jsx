import React from 'react';
import { Container } from 'react-bootstrap';
import About from './about/about';
import Advantages from './advantages/advantages';
import style from './body.module.css';
import Partners from './partners/partners';
import Start from './start/start';

let bodyArray = [
    <About />,
    <Start />,
    <Advantages />,
    <Partners />
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
