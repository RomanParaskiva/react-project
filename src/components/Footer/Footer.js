import React from 'react';
import MenuLinks from "../Header/MenuLinks";


function Footer() {
    return (
        <footer>
            <MenuLinks className="footer_menu_links"/>
            <img src="https://www.codewars.com/users/Parasta/badges/small" alt="Parasta"/>
        </footer>
    )
}

export default Footer;