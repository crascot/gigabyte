import React from 'react';
import style from './teachers-body.module.css';
import { Col } from 'react-bootstrap';
import teaher1 from '../../../../image/teachers/teacher1.png';
import teaher2 from '../../../../image/teachers/teacher2.png';
import teaher3 from '../../../../image/teachers/teacher3.png';
import TeacherCard from './teacher-card/teacher-card';

let teahers = [
    {
        avatar: teaher1,
        name: 'Дмитрий Иванов',
        job: 'Специалист по видеокартам'
    },
    {
        avatar: teaher2,
        name: 'Григорий Антонов',
        job: 'Специалист по настройке ПО'
    },
    {
        avatar: teaher3,
        name: 'Константин Васильев',
        job: 'Специалист по процессорам'
    }
]

let teachersData = teahers.map(data => <TeacherCard avatar={data.avatar} 
                                                    name={data.name} 
                                                    job={data.job} 
/>)

const TeachersBody = () => {
    return (
        <Col className={style.teachersBody}>
            {teachersData}
        </Col>
    )
}

export default TeachersBody;