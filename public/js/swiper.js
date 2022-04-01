setTimeout(() => {
  // Timeout to set time interval in order to let swiper function has enough time to run
  var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 3,
      },
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

}, 200)

// https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
//https://www.youtube.com/watch?v=QVEgGy24Oqc&t=2027
