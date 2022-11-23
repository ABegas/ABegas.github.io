'use stict'

import {headerNavHover, mobileMenu} from './modules/header.js';
import accordion from './modules/accordion.js';
import Swiper, { Navigation, Autoplay } from 'swiper';
import counter from './modules/counter.js';
import compareTitleVisibility from './modules/compare.js';
import switcher from './modules/switcher.js';

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

        modules: [ Navigation, Autoplay ],

        navigation: {
            nextEl: '.c-merchants__carousel__next',
            prevEl: '.c-merchants__carousel__prev',
        },

        autoplay: {
            delay: 2000,
        },

        disableOnInteraction: false
    });

    

    headerNavHover();
    mobileMenu();
    accordion();
    counter();
    switcher();
})

window.addEventListener('scroll', compareTitleVisibility);
