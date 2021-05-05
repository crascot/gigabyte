import React from 'react';
import { Button } from 'react-bootstrap';
import s from '../../../../App.module.css';
import style from './button.module.css';

const MainButton = () => {
    return (
        <Button variant="primary" className={`${style.button} + ${s.w700}`}>Заказать курс</Button>
    )
}

export default MainButton;