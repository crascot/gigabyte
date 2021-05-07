import React from 'react';
import { Image, Table } from 'react-bootstrap';
import style from './table.module.css';
import svg from '../../../../svg/partner.svg';

const PartnersTable = () => {
    return (
        <Table>
            <tbody>
                <tr className={style.trTop}>
                    <td><Image src={svg} /></td>
                    <td><Image src={svg} /></td>
                    <td><Image src={svg} /></td>
                    <td><Image src={svg} /></td>
                </tr>
                <tr>
                    <td><Image src={svg} /></td>
                    <td><Image src={svg} /></td>
                    <td><Image src={svg} /></td>
                    <td><Image src={svg} /></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default PartnersTable;