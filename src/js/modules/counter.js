import { CountUp } from 'countup.js';

const counterAnimation = () => {
    const $counters = document.querySelectorAll(".js-counter");
  
    $counters.forEach( (item) => {
      const value = item.dataset.count;
      const counter = new CountUp(item, value, {enableScrollSpy: true});
    });
}

export default counterAnimation;