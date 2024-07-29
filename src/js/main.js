'use stict'

import {headerNavHover, mobileMenu, headerTopPosition} from './modules/header.js';
import accordion from './modules/accordion.js';
import Swiper, { Navigation, Autoplay } from 'swiper';
import counter from './modules/counter.js';
import compareTitleVisibility from './modules/compare.js';
import switcher from './modules/switcher.js';
import scrollnav from 'scrollnav';

window.addEventListener('DOMContentLoaded', () => {

    document.addEventListener("touchstart", function(){}, true);

    const swiper = new Swiper('.js-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        slideActiveClass: 'c-merchants__carousel__slide--active',
        slideNextClass: 'c-merchants__carousel__slide--next',
        slidePrevClass: 'c-merchants__carousel__slide--prev',

        breakpoints: {
            // when window width is >= 320px
            768: {
              slidesPerView: 5,
              spaceBetween: 40,
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

    scrollnav.init(document.querySelector('.js-article-content'));

    headerNavHover();
    mobileMenu();
    headerTopPosition();
    accordion();
    counter();
    switcher();
    
})

window.addEventListener('scroll', () => {
    compareTitleVisibility();
    headerTopPosition();
});
