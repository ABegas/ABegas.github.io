const accordion = () => {
    const accordion = document.querySelectorAll('.js-accordion'),
          accordionItemClass = 'js-accordion-item',
          accordionItemActiveClass = 'accordion-item-active';
    let _target = null;

    accordion.forEach(accordion => {
        const accordionItems = accordion.querySelectorAll('.' + accordionItemClass);

        accordionItems.forEach(item => {    
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains(accordionItemClass) && e.target !== 'SPAN') {
                    _target = e.target;
                }
                const accordionContent = _target.nextElementSibling;
    
                if(_target && item.classList.contains(accordionItemActiveClass)) { 
                    _target.classList.remove(accordionItemActiveClass);
                    accordionContent.style.maxHeight = null;
                } else {
                    accordionItems.forEach(activeElem => {
                        activeElem.classList.remove(accordionItemActiveClass);
                        activeElem.nextElementSibling.style.maxHeight = null;
                    })
                    
                    _target.classList.add(accordionItemActiveClass);
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }
            })
        })
    })   
}

export default accordion;