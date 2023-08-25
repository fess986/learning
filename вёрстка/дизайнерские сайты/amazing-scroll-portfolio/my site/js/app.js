console.log('ass');

slider1 = new Swiper('.slider', {
  freeMode: true, // переключение не фиксированное а в свободном виде
  centeredSliders: true, // центрирование относительно друг друга
  direction: 'vertical', // направление движения слайдов
  mousewheel: true, // движение при помощи колесика мыши
  slidesPerView: 1.75, // уоличество отображаемых слайдов в столбце
})