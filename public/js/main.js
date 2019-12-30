document.addEventListener('DOMContentLoaded',() => {
    'use strict';
    const openMenuBtn = document.getElementById('menu_open');
    const closeMenuBtn = document.getElementById('menu_close');
    const header = document.getElementById('header');
    const root = document.getElementById('root');

    openMenuBtn.addEventListener('click', () => {
        header.style.display = 'flex';
        openMenuBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', () => {
        header.style.display = 'none';
        closeMenuBtn.style.display = 'none';
        openMenuBtn.style.display = 'flex';
    });

    window.addEventListener('scroll', () => {
        if(root.offsetWidth > 768) {
            if (pageYOffset >= 100) {
                header.style.backgroundColor = '#1a252f';
            } else {
                header.style.backgroundColor = 'transparent';
            }
        }
    });

});





