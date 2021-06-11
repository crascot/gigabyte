import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import s from '../../../App.module.css';
import style from './about.module.css';
import Pc from '../../../image/pc.png';

const About = () => {
    return (
        <Row className={style.about}>
            <Col className={style.pc}>
                <Image src={Pc} />
            </Col>
            <Col className={style.whatWeDo}>
                <h1 className={s.w700}>Чем мы занимаемся?</h1>
                <p className={s.w400}>Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Eget neque, dignissim et feugiat elit augue 
                    in suspendisse egestas. Dictum vestibulum mi et sed 
                    nunc, orci fermentum vestibulum, morbi. Et neque, 
                    adipiscing sapien sem senectus praesent aenean 
                    consequat. Aenean facilisi turpis aliquet fringilla. 
                    Nunc sem felis sed interdum feugiat mattis elit, 
                    sollicitudin. Quam pharetra rhoncus risus, cursus 
                    id elementum aliquet. Nullam turpis arcu malesuada 
                    arcu interdum placerat nisi, lobortis. 
                </p>
            </Col>
        </Row>
    )
}

export default About;