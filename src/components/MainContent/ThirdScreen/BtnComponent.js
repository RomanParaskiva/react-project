import React from 'react';

function BtnComponent(props) {
    return (
        <button data-btn-id={props.id}>{props.text}</button>
    )
}

export default BtnComponent;