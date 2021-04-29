import React from 'react';
import style from './main-menu.module.css';
import logo from '../../../svg/logo.svg';
import { Image, Navbar, Nav, Button } from 'react-bootstrap';

const MainMenu = () => {
    return (
        <Navbar expand="lg" className={style.mainMenu}>
            <Navbar.Brand href="#home"> <Image src={logo} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={style.nav}>
                    <Nav.Link href="#lavnaya">Главная</Nav.Link>
                    <Nav.Link href="#сourses">Курсы</Nav.Link>
                    <Nav.Link href="#schedule">Расписание</Nav.Link>
                    <Nav.Link href="#teachers">Преподаватели</Nav.Link>
                    <Nav.Link href="#newsletter">Рассылка</Nav.Link>
                    <Nav.Link href="#contacts">Контакты</Nav.Link>
                </Nav>
                <Button className={style.button}>Зайти в кабинет</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MainMenu;