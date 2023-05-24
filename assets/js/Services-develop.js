const button = document.querySelector('.Go-To-Top-Btn');

window.addEventListener('scroll', function () {

    const scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
        button.style.display = 'flex';
    } else {
        button.style.display = 'none';
    }

});