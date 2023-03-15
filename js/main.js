const accordionTitle = document.querySelectorAll('.accordion__title');
const plusIcon = document.querySelector('.accordion__icon');

accordionTitle.forEach((el) => { el.addEventListener('click', showText)});
function showText(){
    this.nextElementSibling.classList.toggle('hide');
    this.lastElementChild.classList.toggle('rotate');
}