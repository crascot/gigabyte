import React from 'react';
import CourseCard from './course-card/course-card';
import style from './course.module.css';
const Course = () => {
    return (
        <div className={style.course}>
            <CourseCard />
        </div>
    )
}

export default Course;