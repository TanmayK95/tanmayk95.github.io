const parallax = document.querySelector("#home")
const parallax2 = document.querySelector("#interests")
const parallax3 = document.querySelector("#courses")
const parallax4 = document.querySelector("#skills")
const parallax5 = document.querySelector("#contact")
const parallax6 = document.querySelector("#about")

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = -offset*0.07 + 'px';
    parallax2.style.backgroundPositionY = -offset*0.07 + 'px';
    parallax3.style.backgroundPositionY = -offset*0.07 + 'px';
    parallax4.style.backgroundPositionY = -offset*0.07 + 'px';
    parallax5.style.backgroundPositionY = -offset*0.07 + 'px';
    parallax6.style.backgroundPositionY = -offset*0.07 + 'px';
})