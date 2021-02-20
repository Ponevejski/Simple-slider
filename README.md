# simple-slider
Simple slider application made with Vanila JavaScript

All you need to do is to put classNames into args of function slider();

  slider({
    container: ".offer__slider", // main wrapper of slider
    slide: ".offer__slide", // visible slide
    prevArrow: ".offer__slider-prev", // previous arrow ( button )
    nextArrow: ".offer__slider-next", // next arrow ( button )
    totalCounter: "#total", // visible value of slides 
    currentCounter: "#current", // current slide index ( visible number )
    wrapper: ".offer__slider-wrapper", // wrapper of the slide
    field: ".offer__slider-inner" // field of all of the slides
  });
