import React from 'react';
import { Card, Image } from 'react-bootstrap';
import s from '../../../../../App.module.css';
import style from './block.module.css';

const Block = (props) => {
    return (
        <Card className={style.block}>
        <Card.Title className={`${s.w700} + ${style.title}`}>{props.title}</Card.Title>
        <div className={style.img}><Image src={props.img}/></div>
        <Card.Body>
            <Card.Text className={`${s.w400} + ${s.gray} + ${style.text}`}>
                {props.text}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}

export default Block;