import React from "react";
import './index.css';
import history from "src/history";
import Selection from "src/components/Selection";

type Props = {
  children: React.ReactNode
}

const BasicSearch = (props:Props) => {

    return (
        <div className="form-box">
            <Selection
                label='地點'
                options={['中西區', '東區', '南區', '灣仔', '九龍城', '觀塘', '深水埗', '黃大仙', '油尖旺', '離島', '葵青', '北區', '西貢', '沙田', '大埔', '荃灣', '屯門', '元朗']}
            />
            <Selection
                label='科目'
                options={['中文', 'eng', 'math', 'ls', 'phy', 'chem', 'bio', 'econ', 'bafs', 'geo', 'history', '中國歷史']}
            />

            <button onClick={() => history.push(`/result`)}>搜尋 <i className="fa-solid fa-magnifying-glass"></i></button>
        </div >
    );

}


export default BasicSearch;
