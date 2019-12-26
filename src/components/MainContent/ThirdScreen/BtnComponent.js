import React from 'react';

function BtnComponent(props) {
    return (
        <button  onClick={props.onClick}>{props.text}</button>
    )
}

export default BtnComponent;