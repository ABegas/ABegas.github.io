let compareTitleVisibility = () => {
    const compareTitles = document.querySelectorAll('.js-compare-title'),
          titleActiveClass = 'active-title'

    compareTitles.forEach(title => {
        if((title.getBoundingClientRect().top - 200) <= 0) {
            title.classList.add(titleActiveClass);
        } else {
            title.classList.remove(titleActiveClass);
        }
    })
    
}

export default compareTitleVisibility;