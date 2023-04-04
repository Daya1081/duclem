/*SLIDER 3*/
const slider3 = document.querySelector("#slider3");
let sliderSection3 = document.querySelectorAll(".slider-section3");
let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
const btnLeft3 = document.querySelector("#btn_left3");
const btnRight3 = document.querySelector("#btn_right3");

slider3.insertAdjacentElement('afterbegin',sliderSectionLast3);

function next3(){
    let sliderSectionFirst3 = document.querySelectorAll(".slider-section3")[0];
    slider3.style.marginLeft = "-200%";
    slider3.style.transition = "all 0.5s";

    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('beforeend',sliderSectionFirst3);
        slider3.style.marginLeft = "-100%";
    },500);
}
function prev3(){
    let sliderSection3 = document.querySelectorAll(".slider-section3");
    let sliderSectionLast3 = sliderSection3[sliderSection3.length -1];
    let sliderSectionFirst3 = document.querySelectorAll(".slider-section3")[0];
    slider3.style.marginLeft = "0";
    slider3.style.transition = "all 0.5s";

    setTimeout(function(){
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('afterbegin',sliderSectionLast3);
        slider3.style.marginLeft = "-100%";
    },500);
}
btnRight3.addEventListener('click',function(){
    next3();
});
btnLeft3.addEventListener('click',function(){
    prev3();
});