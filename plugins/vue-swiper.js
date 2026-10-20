import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper, {
  // autoplay: {
  //   delay: 1500,
  // },
  navigation: {
    nextEl: ".swiper-button-next ",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {},
});
