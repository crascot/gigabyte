import React from 'react';
import { Row } from 'react-bootstrap';
import Block from './block/block';
import style from './advantages.module.css';

const Advantages = () => {
    return (
        <Row className={style.advantages}>
            <h1>Получите профессию прямо сейчас</h1>
                <Block />
        </Row>
    )
}

export default Advantages;