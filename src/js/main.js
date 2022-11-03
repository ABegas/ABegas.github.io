import {headerNavHover, mobileMenu} from './modules/header.js';
import accordion from './modules/accordion.js';
import Swiper, { Navigation } from 'swiper';

window.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.js-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: true,
        slideActiveClass: 'c-merchants__carousel__slide--active',
        slideNextClass: 'c-merchants__carousel__slide--next',
        slidePrevClass: 'c-merchants__carousel__slide--prev',

        breakpoints: {
            // when window width is >= 320px
            768: {
              slidesPerView: 5,
              spaceBetween: 0,
            }
        },

        modules: [ Navigation ],

        // Navigation arrows
        navigation: {
            nextEl: '.c-merchants__carousel__next',
            prevEl: '.c-merchants__carousel__prev',
        },
    });

    headerNavHover();
    mobileMenu();
    accordion();


})