let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let navlist_2 = document.querySelector('.navlist-2');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
    navlist_2.classList.toggle('open');
}