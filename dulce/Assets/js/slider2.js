/*SLIDER 2*/
const slider2 = document.querySelector("#slider2");
let sliderSection2 = document.querySelectorAll(".slider-section2");
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
const btnLeft2 = document.querySelector("#btn_left2");
const btnRight2 = document.querySelector("#btn_right2");

slider2.insertAdjacentElement('afterbegin',sliderSectionLast2);

function next2(){
    let sliderSectionFirst2 = document.querySelectorAll(".slider-section2")[0];
    slider2.style.marginLeft = "-200%";
    slider2.style.transition = "all 0.5s";

    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend',sliderSectionFirst2);
        slider2.style.marginLeft = "-100%";
    },500);
}
function prev2(){
    let sliderSection2 = document.querySelectorAll(".slider-section2");
    let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];
    let sliderSectionFirst2 = document.querySelectorAll(".slider-section2")[0];
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.5s";

    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin',sliderSectionLast2);
        slider2.style.marginLeft = "-100%";
    },500);
}
btnRight2.addEventListener('click',function(){
    next2();
});
btnLeft2.addEventListener('click',function(){
    prev2();
});