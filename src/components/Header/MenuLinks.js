import React from 'react';
import LinkData from './LinkData';
import MenuLink from "./MenuLink";

function MenuLinks() {
    const linksArr = LinkData.map(link => <MenuLink key={link.id} {...link}/> );

    return(
        <nav className="nav">
            {linksArr}
        </nav>
    )
}

export default MenuLinks;