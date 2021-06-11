import React from 'react';
import { Row } from 'react-bootstrap';
import style from './program.module.css';
import Header from './header/header';
import Weeks from './weeks/weeks';

const Program = () => {
    return (
        <Row className={style.program}>
            <Header />
            <Weeks />
        </Row>
    )
}

export default Program;