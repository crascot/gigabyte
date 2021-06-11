import React from 'react';
import { Card, Image } from 'react-bootstrap';
import s from '../../../../../App.module.css';
import style from './teachers-card.module.css';

const TeacherCard = (props) => {
    return (
        <Card className={style.card}>
            <Image src={props.avatar} className={style.avatar} roundedCircle />
            <Card.Body className={style.data}>
                <Card.Title className={`${style.name} ${s.w500}`}>{props.name}</Card.Title>
                <Card.Text className={`${style.job} + ${s.w400}`}>{props.job}</Card.Text>
                <button className={style.button}>Биография</button>
            </Card.Body>
        </Card>
    )
}

export default TeacherCard;