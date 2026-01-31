const burgerBtn = document.querySelector('.burger-btn');
const overlay = document.querySelector('#overlay');

const  setMenu = (open) => {
    document.body.classList.toggle('menu-open', open)
}

burgerBtn.addEventListener('click', () => {
    const open = document.body.classList.contains('menu-open')
    setMenu(!open)
})