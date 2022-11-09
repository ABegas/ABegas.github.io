'use stict';

const counters = document.querySelectorAll('.js-counter');
const speed = 100;

const counterAnimation = () => {
    counters.forEach( counter => {

        const animate = () => {
        const value = +counter.dataset.count;
        const data = +counter.innerText;
        
        const time = value / speed;
        if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 100);
            }else{
                counter.innerText = value;
            }
        
        }
        
        if ((window.pageYOffset + window.innerHeight) >= counter.offsetTop + 50) {
            animate();
        }
        
    });
}

export default counterAnimation;