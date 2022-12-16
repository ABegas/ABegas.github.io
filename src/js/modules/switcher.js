const parentElem = document.querySelector('.js-switcher-parent'),
      switcher = document.querySelector('.js-switcher'),
      annuallyClass = 'annualy-plan-active',
      monthlyClass = 'monthly-plan-active';

let checkSwitcherExist = () => {
    if (switcher != null) {
        return true;
    }
}

let toggleActivePlanClass = () => {
    if (switcher.checked) {
        parentElem.classList.add(annuallyClass);
        parentElem.classList.remove(monthlyClass);
    } else {
        parentElem.classList.add(monthlyClass);
        parentElem.classList.remove(annuallyClass);
    }
}

let switchActiveClasses = () => {
    if (checkSwitcherExist()) {
        toggleActivePlanClass();
        switcher.addEventListener('change', () => {
            toggleActivePlanClass();
        })
    }
}

export default switchActiveClasses;