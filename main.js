//burger handler

(function (){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.mobile_nav');const menuCloseItem = document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('mobile_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('mobile_nav_active');
    });
}());