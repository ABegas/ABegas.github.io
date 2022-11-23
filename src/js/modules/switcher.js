const parentElem = document.querySelector('.js-switcher-parent'),
      switcher = document.querySelector('.js-switcher'),
      annuallyClass = 'annualy-plan-active',
      monthlyClass = 'monthly-plan-active';

let switcherExist = () => {
    if (switcher.checked) {
        return true;
    }
}

let addActivatePlanClass = () => {
    if (switcherExist()) {
        parentElem.classList.add(annuallyClass);
        parentElem.classList.remove(monthlyClass);
    } else {
        parentElem.classList.add(monthlyClass);
        parentElem.classList.remove(annuallyClass);
    }
}

if (switcherExist()) {
    addActivatePlanClass();
}

let switchActiveClasses = () => {
    if (switcher != null) {
        switcher.addEventListener('change', () => {
            addActivatePlanClass();
        })
    }
}



export default switchActiveClasses;