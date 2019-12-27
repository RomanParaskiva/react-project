import React from 'react';

function MenuLink(props) {
    return(
        <a href={props.href} className={props.linkClass}>{props.text}</a>
    )
}

export default MenuLink;