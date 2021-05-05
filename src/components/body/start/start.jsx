import React from 'react';
import { Row } from 'react-bootstrap';
import Bottom from './bottom/bottom';
import style from './start.module.css';
import Top from './top/top.jsx';

const Start = () => {
    return (
        <Row className={style.start}>
            <Top />
            <Bottom />
        </Row>
    )
}

export default Start;