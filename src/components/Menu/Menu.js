import React from 'react';
import ServicesLinkData from "../ServicesContent/ServicesLinkData";
import MenuLink from "./MenuLink";
import MenuLinks from "./MenuLinks";
import {IconBlock} from "./IconBlock";

export default function Menu() {
    const servicesLinks = ServicesLinkData.map(link => <MenuLink key={link.id} {...link}/>);
    return (
        <div id="menu" style={{left: '-310px'}}>
            <div className="menu_blc">
                <MenuLinks/>

                <div className="nav">
                    {servicesLinks}
                </div>

                <IconBlock/>
            </div>
        </div>
    )
}