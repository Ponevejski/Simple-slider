function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field,
  }) {
    // Slider
  
    // <<<< Карусель >>>>
  
    let offset = 0; //отступ для transform
    let slideIndex = 1;
  
    const slides = document.querySelectorAll(slide),
      slider = document.querySelector(container),
      prev = document.querySelector(prevArrow),
      next = document.querySelector(nextArrow),
      total = document.querySelector(totalCounter),
      current = document.querySelector(currentCounter),
      slidesWrapper = document.querySelector(wrapper),
      width = window.getComputedStyle(slidesWrapper).width, // берем первоначальную ширину, т.к. инлайн стили нам еще недоступны
      slidesField = document.querySelector(field);
  
    if (slides.length < 10) {
      // для проверки на цифру (меньше ли 10) + устанавливаем первоначальное значение для current.TextContent (чтобы сразу отображалась цифра 1 на слайдере)
      total.textContent = `0${slides.length}`;
      current.textContent = `0${slideIndex}`;
    } else {
      total.textContent = slides.length;
      current.textContent = slideIndex;
    }
  
    slidesField.style.width = 100 * slides.length + "%"; //делаем ширину контейнера .offer___slider-inner равной 400%
    slidesField.style.display = "flex"; // присваиваем для inline
    slidesField.style.transition = "0.5s all"; // красивая задержка
  
    slidesWrapper.style.overflow = "hidden"; // всё, что не вмещается в окошко слайдера, скрыто
  
    slides.forEach((slide) => {
      slide.style.width = width; // Каждому слайду присваиваем ширину окошка (фиксируем ширину, если она у них разная)
    });
  
    slider.style.position = "relative";
  
    const dots = document.createElement("ul");
    const dotsArr = [];
    dots.classList.add("carousel-indicators");
  
    slider.append(dots);
  
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement("li");
      dot.setAttribute("data-slide-to", i + 1);
      dot.classList.add("dot");
  
      if (i == 0) {
        dot.style.opacity = 1;
      }
      dots.append(dot);
      dotsArr.push(dot);
    }
  
    function dotOpacity() {
      dotsArr.forEach((dot) => {
        dot.style.opacity = ".5";
      });
      dotsArr[slideIndex - 1].style.opacity = 1;
    }
  
    function checkNumber() {
      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`; // если цифра слайда меньше 10, то перед ней добавляем 0
      } else {
        current.textContent = slideIndex;
      }
    }
  
    function transformField() {
      slidesField.style.transform = `translateX(-${offset}px)`; // сдивгаем слайд
    }
  
    next.addEventListener("click", () => {
      if (offset == +width.replace(/\D/g, "") * (slides.length - 1)) {
        // если offset равен ширине одного слайда * на количество слайдов - 1 (чтобы не оставалось лишней пустой)
        offset = 0; // устанавливаем offset в ноль (долистали до самого конца, и возвращаемся в начало)
      } else {
        offset += +width.replace(/\D/g, ""); // делаем смещение слайда на ширину одного слайда, и слайд смещается на определенную величину
      }
  
      if (slideIndex == slides.length) {
        // т.к. индексы начинают отсчет с 0, то послдним будет 3 индекс. На 4 уже ничего не будет (в нашем случае)
        slideIndex = 1;
      } else {
        slideIndex++;
      }
  
      transformField();
      checkNumber();
      dotOpacity();
    });
  
    prev.addEventListener("click", () => {
      if (offset == 0) {
        offset = +width.replace(/\D/g, "") * (slides.length - 1);
      } else {
        offset -= +width.replace(/\D/g, "");
      }
  
      if (slideIndex == 1) {
        slideIndex = slides.length;
      } else {
        slideIndex--;
      }
  
      transformField();
      checkNumber();
      dotOpacity();
    });
  
    dotsArr.forEach((dot) => {
      dot.addEventListener("click", (e) => {
        const dotTarget = e.target.getAttribute("data-slide-to");
        slideIndex = dotTarget;
        offset = +width.replace(/\D/g, "") * (dotTarget - 1);
        transformField();
        dotOpacity();
      });
    });
  }

  
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