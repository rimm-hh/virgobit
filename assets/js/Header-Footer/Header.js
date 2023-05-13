window.addEventListener('load', function () {
    if (window.innerWidth > 1040) {
        document.querySelector(".serv-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "427px";
        }
        document.querySelector(".serv-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "101px";
        }
        document.querySelector(".case-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "427px";
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
window.addEventListener('resize', function () {
    if (window.innerWidth > 1040) {
        document.querySelector(".serv-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "427";
        }
        document.querySelector(".serv-sec").onmouseout = function () {
            document.querySelector(".header").style.height = "101px";
        }
        document.querySelector(".case-sec").onmouseover = function () {
            document.querySelector(".header").style.height = "427";
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
