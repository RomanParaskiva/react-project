import React from 'react';
import infoBlockBtnData from './infoBlockBtnData';
import BtnComponent from "./BtnComponent";

function InfoBlock() {

    const buttonComp = infoBlockBtnData.map(btn => <BtnComponent id={btn.id} text={btn.text}/>);
    return (
        <div className="info_block">
            <div className="info_btn_block">
                {buttonComp}
            </div>
        </div>
    )
}

export default InfoBlock;