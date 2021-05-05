import React from 'react';
import s from '../../../../App.module.css';
import style from './course-card.module.css';
import { Container } from 'react-bootstrap';
import Block from './block/block';

let course = [
    {time: 'Дней'},
    {time: 'Часов'},
    {time: 'Минут'},
    {time: 'Секунд'}
]

let courseData = course.map(data => <Block time={data.time} />)

const CourseCard = () => {
    return (
        <Container className={style.courseCard} fluid>
            <h1 className={`${style.header} + ${s.w700}`}>Первый курс по компьютерной сборке</h1>
            <div className={style.blocks}>{courseData}</div>
        </Container>
    )
}

export default CourseCard;