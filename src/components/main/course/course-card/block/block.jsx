import React from 'react';
import s from '../../../../../App.module.css';
import style from './block.module.css';
import { Card } from 'react-bootstrap';

const Block = (props) => {
    return (
        <Card className={style.block}>
            <Card.Body>
                <Card.Title className={`${style.title} + $${s.w700}`}>18</Card.Title>
                <Card.Text className={`${style.time} + ${s.gray}`}> {props.time} </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Block;