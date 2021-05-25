import React from 'react';
import style from './teachers.module.css';
import { Row } from 'react-bootstrap';
import TeachersHeader from './header/teacher-header';
import TeachersBody from './body/teachers-body';

const Teachers = () => {
    return (
        <Row className={style.teachers}>
            <TeachersHeader />
            <TeachersBody />
        </Row>
    )
}

export default Teachers;