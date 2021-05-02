import React from 'react';
import { Container } from 'react-bootstrap';
import Earned from './earned/earned';
import Progress from './progress/progress';

const Line = () => {
    return (
        <Container fluid>
            <Earned />
            <Progress />
        </Container>
    )
}

export default Line;