import React from 'react';
import { Col } from 'react-bootstrap';
import style from './bottom.module.css';
import img1 from '../../../../image/start-img/img1.png';
import img2 from '../../../../image/start-img/img2.png';
import img3 from '../../../../image/start-img/img3.png';
import img4 from '../../../../image/start-img/img4.png';
import Block from './block/block';

let bottomArray = [
    {
        title: '100%',
        img: img1,
        text: 'Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности обеспечивает актуальность форм воздействия'
    },
    {
        title: '75%',
        img: img2,
        text: 'Задача организации, в особенности же социально-экономическое развитие играет важную роль в формировании направлений прогрессивного развития.'
    },
    {
        title: '50%',
        img: img3,
        text: 'Таким образом, дальнейшее развитие различных форм деятельности требует определения и уточнения существующих финансовых и административных условий'
    },
    {
        title: 'Итог',
        img: img4,
        text: 'Не следует, однако, забывать о том, что начало повседневной работы по формированию позиции способствует повышению актуальности существующих финансовых и административных условий!'
    }
]

let bottomData = bottomArray.map((data, index) => <Block key={index}
                                                title={data.title} 
                                                img={data.img} 
                                                text={data.text} />);

const Bottom = () => {
    return (
        <Col className={style.bottom}>
            {bottomData}
        </Col>
    )
}

export default Bottom;