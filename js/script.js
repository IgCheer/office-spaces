const swiper = new Swiper('.slider-main-block', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-main-block__arrow.swiper-button-next',
      prevEl: '.slider-main-block__arrow.swiper-button-prev',
    },
  });

/* Tabs */

const tabsButtons = document.querySelectorAll('.tabs-deal__button');

const tabsElements = document.querySelectorAll('.tabs-deal__item');

document.addEventListener("click", function(event) {
  let currentActiveIndex;
  let newActiveIndex;
    if (event.target.closest('.tabs-deal__button')) {
      tabsButtons.forEach((item, index) => {
        if (item.classList.contains('active')) {
          currentActiveIndex = index;
          item.classList.remove('active')
        }
        if (item === event.target) {
          newActiveIndex = index;
          event.target.classList.add('active');
        }
      });
      tabsElements[currentActiveIndex].classList.remove('active');
      tabsElements[newActiveIndex].classList.add('active');
        
  }
});
