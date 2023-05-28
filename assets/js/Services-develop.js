const button = document.querySelector('.Go-To-Top-Btn');

window.addEventListener('resize', function() {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 501) {
    button.style.display = 'none';
  } else {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 500) {
          button.style.display = 'flex';
        } else {
          button.style.display = 'none';
        }
      });
  }
});

window.addEventListener('load', function() {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth < 501) {
    button.style.display = 'none';
  } else {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 500) {
          button.style.display = 'flex';
        } else {
          button.style.display = 'none';
        }
      });
  }
});