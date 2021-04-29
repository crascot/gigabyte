import React from 'react';
import { Container } from 'react-bootstrap';
import style from './last-line.module.css';

const LastLine = () => {
    return (
        <div className={style.lastLine}>
            <Container className={style.container}>
                <p>button</p>
                <p>students</p>
                <p>line</p>
            </Container>
        </div>
    )
}

export default LastLine;