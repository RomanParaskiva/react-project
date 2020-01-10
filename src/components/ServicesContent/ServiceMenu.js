import React from 'react';
import ServicesLinkData from "./ServicesLinkData";
import MenuLink from "../Header/MenuLink";
import MenuLinks from "../Header/MenuLinks";
import {IconBlock} from "../Header/IconBlock";

export default function ServiceMenu() {
    const servicesLinks = ServicesLinkData.map(link => <MenuLink key={link.id} {...link}/>);
    return (
        <div id="menu">
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