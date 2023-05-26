const acceptButton = document.querySelector('.Cookie-Accept');
const cookieBack = document.querySelector('.Cookie-back');

window.addEventListener('load', function() {
    if (!localStorage.getItem('Cookie')) {
        localStorage.setItem('Cookie', '0');
        cookieBack.style.bottom = '0';
    } else if (localStorage.getItem('Cookie') === '0') {
        cookieBack.style.bottom = '0';
    }
});

acceptButton.addEventListener('click', () => {
    localStorage.setItem('Cookie', '1');
    cookieBack.style.bottom = '-200px';
});