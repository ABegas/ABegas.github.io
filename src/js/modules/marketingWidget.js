const marketingWidget = () => {
    const mrktWidget = document.querySelector(".js-marketing-widget");
    const mrktWidgetClose = document.querySelector(".js-marketing-widget-close");
    const cookieValueMaxAge = mrktWidget.dataset.maxAgeHours * 3600;
    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("mrktWidgetHidden="))
        ?.split("=")[1];
  
    if(!cookieValue) {
        setTimeout(() => {
            mrktWidget.classList.add('is-shown');
        },  mrktWidget.dataset.shownTime)
    }
    console.log(cookieValueMaxAge);
    mrktWidgetClose.addEventListener('click', () => {
        mrktWidget.classList.remove('is-shown');
        document.cookie = "mrktWidgetHidden=true; max-age=" + cookieValueMaxAge + ";";
    })
}

export default marketingWidget;