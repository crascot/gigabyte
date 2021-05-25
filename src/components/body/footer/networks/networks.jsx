import React from 'react';
import { Col, Image } from 'react-bootstrap';
import style from './networks.module.css';
import vk from '../../../../svg/networks/vk.svg';
import youtube from '../../../../svg/networks/youtube.svg';
import facebook from '../../../../svg/networks/facebook.svg';
import instagram from '../../../../svg/networks/instagram.svg';

let networksArray = [
    {src: vk},
    {src: youtube},
    {src: facebook},
    {src: instagram}
]

let networksData = networksArray.map(data => <Image src={data.src} roundedCircle />)

const Networks = () => {
    return (
        <Col className={style.networks}>
            {networksData}
        </Col>
    )
}

export default Networks;