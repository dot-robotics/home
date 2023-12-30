let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2400,
    reset: true
});

sr.reveal('.hero-text', {delay: 200, origin: 'top'});
sr.reveal('.hero-img', {delay: 450, origin: 'top'});
sr.reveal('.social-icons', {delay: 500, origin: 'left'});

sr.reveal('.scroll-down', {delay: 500, origin: 'right'});
sr.reveal('.sponsors-text', {delay: 200, origin: 'top'});
sr.reveal('.sponsor-img', {delay: 450, origin: 'left'});

sr.reveal('.slide-track', {delay: 450, origin: 'right'});