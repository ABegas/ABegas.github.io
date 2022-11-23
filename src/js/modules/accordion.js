const accordion = () => {
    const accordion = document.querySelector('.js-accordion');
    const accordionItems = accordion.querySelectorAll('.js-accordion-item');
    const accordionItemActiveClass = 'accordion-item-active';

    accordionItems.forEach(item => {
        
        item.addEventListener('click', (e) => {
            const accordionContent = e.target.nextElementSibling;

            if(e.target === item && item.classList.contains(accordionItemActiveClass)) { 
                e.target.classList.remove(accordionItemActiveClass);
                accordionContent.style.maxHeight = null;
            } else {
                accordionItems.forEach(activeElem => {
                    activeElem.classList.remove(accordionItemActiveClass);
                    activeElem.nextElementSibling.style.maxHeight = null;
                })
                
                e.target.classList.add(accordionItemActiveClass);
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            }
        })
    })
}

export default accordion;