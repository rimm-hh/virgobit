const contactUsBtn = document.querySelector('.Contact-Us');
const contactUsMobileBtn = document.querySelector('.Contact-Us-mobile');
const contactUsBack = document.querySelector('.contactUs-back');
const contactUsXmark = document.querySelector('.contactUs-xmark');

contactUsBtn.addEventListener('click', () => {
  contactUsBack.style.display = 'block';
});

contactUsMobileBtn.addEventListener('click', () => {
  contactUsBack.style.display = 'block';

  document.querySelector('.x-mark-menu').style.display = 'none';
  document.querySelector('.bars-menu').style.display = 'block';
  document.querySelector('.header-container-mobile-bottom').style.left = '-100%';

  document.querySelector('main').style.display = 'flex';
  document.querySelector('footer').style.display = 'flex';
});

contactUsXmark.addEventListener('click', () => {
  contactUsBack.style.display = 'none';
});