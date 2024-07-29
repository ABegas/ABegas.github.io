const html = document.querySelector('html');
const header = document.querySelector('.js-header');

let headerNavHover = () => {
    
    const headerNavItems = document.querySelectorAll('.js-header-nav-item');
    const hoveredClass = 'nav-item-hovered';

    headerNavItems.forEach(elem => {
        elem.addEventListener('mouseover', (e) => {
            if(e.target) {
                html.classList.add(hoveredClass);
            }
        })

        elem.addEventListener('mouseout', (e) => {
            if(e.target && html.classList.contains(hoveredClass)) {
                html.classList.remove(hoveredClass);
            }
        })
    })
}

let mobileMenu = () => {
    const mobileMenuCta = document.querySelector('.js-hamburger-btn');
    const mobileMenuOpenClass = 'mobile-menu-opened'; 

    mobileMenuCta.addEventListener('click', () => {
        if(html.classList.contains(mobileMenuOpenClass)) {
            html.classList.remove(mobileMenuOpenClass);
        }else {
            html.classList.add(mobileMenuOpenClass);
        }
    })
}

let headerTopPosition = () => {
    if((document.documentElement.scrollTop || document.body.scrollTop) >= 20) {
        header.classList.add('header-stuck');
    } else {
        header.classList.remove('header-stuck');
    }
}

export {headerNavHover, mobileMenu, headerTopPosition};