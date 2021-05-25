import React from 'react';
import { Image } from 'react-bootstrap';
import style from './weeks.module.css';
import line from '../../../../image/program-line.png';
import WeeksBlockLeft from './weeks-block-left/weeks-block';
import WeeksBlockRight from './weeks-block-right/weeks-block';

let leftWeeksArray = [
    {week: '1'},
    {week: '3'},
    {week: '5'},
    {week: '7'}
]
let leftWeeksData = leftWeeksArray.map(data => <WeeksBlockLeft week={data.week}></WeeksBlockLeft>)

let rightWeeksArray = [
    {week: '2'},
    {week: '4'},
    {week: '6'},
]
let rightWeeksData = rightWeeksArray.map(data => <WeeksBlockRight week={data.week}></WeeksBlockRight>)

const Weeks = () => {
    return (
        <div className={style.weeks}>
            <div className={style.left}>
                {leftWeeksData}
            </div>
            <div>
                <Image src={line} />
            </div>
            <div className={style.right}>
                {rightWeeksData}
            </div>
        </div>
    )
}

export default Weeks;