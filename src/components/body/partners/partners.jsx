import React from 'react';
import { Image, Row } from 'react-bootstrap';
import style from './partners.module.css';
import svg from '../../../svg/fast-start.svg';
import PartnersTable from './table/table';

const Partners = () => {
    return (
        <Row className={style.partners}>
            <div className={style.header}>
                <Image src={svg} />
                <h1>Партнеры - топовые бренды</h1>
            </div>

            <div className={style.table}>
                <PartnersTable />
            </div>
        </Row>
    )
}

export default Partners