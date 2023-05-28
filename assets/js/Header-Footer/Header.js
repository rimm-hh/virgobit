window.addEventListener('resize', function () {
    if (window.innerWidth > 1040) {
        document.querySelector(".serv-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "528px";
            // document.querySelector(".header").style.height = "427px";
        }
        document.querySelector(".serv-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "101px";
        }
        document.querySelector(".case-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "528px";
            // document.querySelector(".header").style.height = "427px";
        }
        document.querySelector(".case-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "101px";
        }
    }
    else if (window.innerWidth < 1040) {
        document.querySelector(".serv-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "50.2vw";
        }
        document.querySelector(".serv-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "9.5vw";
        }
        document.querySelector(".case-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "50.2vw";
        }
        document.querySelector(".case-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "9.5vw";
        }
    }
});


window.addEventListener('load', function () {
    if (window.innerWidth > 1040) {
        document.querySelector(".serv-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "528px";
            // document.querySelector(".header").style.height = "427px";
        }
        document.querySelector(".serv-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "101px";
        }
        document.querySelector(".case-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "528px";
            // document.querySelector(".header").style.height = "427px";
        }
        document.querySelector(".case-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "101px";
        }
    }
    else if (window.innerWidth < 1040) {
        document.querySelector(".serv-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "50.2vw";
        }
        document.querySelector(".serv-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "9.5vw";
        }
        document.querySelector(".case-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "50.2vw";
        }
        document.querySelector(".case-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "9.5vw";
        }
    }
});

// 
const barsMenu = document.querySelector('.bars-menu');
const xMark = document.querySelector('.x-mark-menu');
const headerContainer = document.querySelector('.header-container-mobile-bottom');

barsMenu.addEventListener('click', () => {
  barsMenu.style.display = 'none';
  xMark.style.display = 'block';
  headerContainer.style.left = '0';

  document.querySelector('main').style.display = 'none';
  document.querySelector('footer').style.display = 'none';
});

xMark.addEventListener('click', () => {
  xMark.style.display = 'none';
  barsMenu.style.display = 'block';
  headerContainer.style.left = '-100%';

  document.querySelector('main').style.display = 'flex';
  document.querySelector('footer').style.display = 'flex';
});

// 

const servMobileBtn = document.querySelector('.serv-mobile-btn');
const servCaseBtn = document.querySelector('.serv-case-btn');

const chevronDownMobile1 = document.querySelector('.chevron-down-mobile-1');
const chevronDownMobile2 = document.querySelector('.chevron-down-mobile-2');
const servMobile = document.querySelector('.serv-mobile');
const servCase = document.querySelector('.serv-case');

servMobileBtn.addEventListener('click', () => {
    if (servMobile.style.height === '190px') {
        servMobile.style.height = '0px';
        servCase.style.height = '0px';

        chevronDownMobile1.style.transform = 'rotate(0deg)';
        chevronDownMobile2.style.transform = 'rotate(0deg)';
    } else {
        servMobile.style.height = '190px';
        servCase.style.height = '0px';

        chevronDownMobile1.style.transform = 'rotate(180deg)';
        chevronDownMobile2.style.transform = 'rotate(0deg)';
    }
});

servCaseBtn.addEventListener('click', () => {
    if (servCase.style.height === '150px') {
        servCase.style.height = '0px';
        servMobile.style.height = '0px';

        
        chevronDownMobile1.style.transform = 'rotate(00deg)';
        chevronDownMobile2.style.transform = 'rotate(0deg)';
    } else {
        servCase.style.height = '150px';
        servMobile.style.height = '0px';

        
        chevronDownMobile1.style.transform = 'rotate(0deg)';
        chevronDownMobile2.style.transform = 'rotate(180deg)';
    }
});