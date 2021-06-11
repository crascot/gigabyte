import React from 'react';
import { Card } from 'react-bootstrap';
import s from '../../../../../App.module.css';
import style from './block-item.module.css';

const BlockItem = (props) => {
    return (
        <Card className={style.block}>
            <Card.Img className={style.img} src={props.img} />
            <Card.Body>
                <Card.Title className={`${style.title} + ${s.w500}`}>{props.title}</Card.Title>
                <Card.Text className={`${style.text} + ${s.gray}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Netus eget velit quisque accumsan amet tortor. Velit, volutpat
                    egestas fringilla mi porttitor tempus. Placerat dui.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BlockItem;