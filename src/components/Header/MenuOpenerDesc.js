import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';


function MenuOpenerDesctopBtn() {

    function handleClick(e) {
        const serviceMenuBlc = document.getElementById('menu');
        e.preventDefault();
        if (serviceMenuBlc.style.left === '-310px') {
            serviceMenuBlc.style.left = '0px';
        } else {
            serviceMenuBlc.style.left = '-310px';
        }
    }

    return (
        <div className="menu_opener_desc">
            <a className="menu_opener_desc_btn" onClick={handleClick}><MenuIcon/></a>
        </div>


    )
}

export default MenuOpenerDesctopBtn;