window.addEventListener('load', adjustPosition);

function adjustPosition() {
  document.querySelector('.container-main-1-img-1').style.transform = 'scale(1)';

  document.querySelector('.container-main-1-img-2').style.top = '-35vw';
  document.querySelector('.container-main-1-img-2').style.right = '-20%';
  document.querySelector('.container-main-1-img-2').style.transform = 'scale(0.15)';

  document.querySelector('.container-main-1-img-3').style.top = '15vw';
  document.querySelector('.container-main-2').style.top = '26vw';
  document.querySelector('.container-main-3').style.marginTop = '0vw';
  document.querySelector('.container-main-1-img-3').style.transform = 'scale(1)';
}

// 

function handleMouseOver(element, box1, box2) {
  element.onmouseover = function () {
    box1.style.display = 'none';
    box2.style.display = 'flex';
  }
  box2.onmouseout = function () {
    box1.style.display = 'flex';
    box2.style.display = 'none';
  }
}

const box1UIUX = document.querySelector('.box-1-uiux');
const box2UIUX = document.querySelector('.box-2-uiux');
handleMouseOver(box1UIUX, box1UIUX, box2UIUX);
handleMouseOver(box2UIUX, box1UIUX, box2UIUX);

const box1Dev = document.querySelector('.box-1-Dev');
const box2Dev = document.querySelector('.box-2-Dev');
handleMouseOver(box1Dev, box1Dev, box2Dev);
handleMouseOver(box2Dev, box1Dev, box2Dev);

const box1Heal = document.querySelector('.box-1-Heal');
const box2Heal = document.querySelector('.box-2-Heal');
handleMouseOver(box1Heal, box1Heal, box2Heal);
handleMouseOver(box2Heal, box1Heal, box2Heal);

// 

const slider = document.querySelector('.container-main-4-bottom');


let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
});

slider.addEventListener("mouseup", () => {
  isDown = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
  isDown = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 1;
  slider.scrollLeft = scrollLeft - walk;
});

//

const moreButton = document.querySelector('.container-main-5-bottom-more');
const lessButton = document.querySelector('.container-main-5-bottom-less');
const targetContainers = document.querySelectorAll('.container-main-5-bottom-3, .container-main-5-bottom-4, .container-main-5-bottom-5, .container-main-5-bottom-6, .container-main-5-bottom-7, .container-main-5-bottom-8');

moreButton.addEventListener('click', () => {
  targetContainers.forEach(container => {
    container.style.display = 'flex';
  });
  moreButton.style.display = 'none';
  lessButton.style.display = 'flex';
});

lessButton.addEventListener('click', () => {
  targetContainers.forEach(container => {
    container.style.display = 'none';
  });
  moreButton.style.display = 'flex';
  lessButton.style.display = 'none';
});

//   