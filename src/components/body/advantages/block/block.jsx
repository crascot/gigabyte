import React from 'react';
import { Col } from 'react-bootstrap';
import style from './block.module.css';
import svg1 from '../../../../svg/advantages/pc.svg';
import svg2 from '../../../../svg/advantages/flash.svg';
import svg3 from '../../../../svg/advantages/adapter.svg';
import BlockItem from './block-item/block-item';

let blockArray = [
    {
        img: svg1,
        title: 'Только практические навыки в работе',
    },
    {
        img: svg2,
        title: 'Работа на самом современном оборудовании',
    },
    {
        img: svg3,
        title: 'Сертификация по окончании обучения',
    }
]

let blockData = blockArray.map(data => <BlockItem img={data.img} title={data.title} />)

const Block = () => {
    return (
        <Col className={style.block}>
            {blockData}
        </Col>
    )
}

export default Block;