import slider from "./slider";


window.addEventListener("DOMContentLoaded", function () {

  slider({
    container: ".offer__slider",
    slide: ".offer__slide", 
    prevArrow: ".offer__slider-prev", 
    nextArrow: ".offer__slider-next",
    totalCounter: "#total", 
    currentCounter: "#current", 
    wrapper: ".offer__slider-wrapper", 
    field: ".offer__slider-inner"
  });

});