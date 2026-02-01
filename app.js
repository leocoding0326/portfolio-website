
//Burger Menu Opening and Closing//
const burgerBtn = document.querySelector('.burger-btn');

const  setMenu = (open) => {
    document.body.classList.toggle('menu-open', open)
}

burgerBtn.addEventListener('click', () => {
    const open = document.body.classList.contains('menu-open')
    setMenu(!open)
})

//Zoom In Image Trigger //

const zoomable = document.querySelector('.zoomable')
const overlay = document.querySelector('.zoom-overlay')

const zoomIn = zoom => {
    document.body.classList.toggle('zoom-in', zoom)
}

zoomable.addEventListener('click', () => {
    const zoom = document.body.classList.contains('zoom-in')
    zoomIn(!zoom)
})

overlay.addEventListener('click', (event) => {
    if (event.target === event.currentTarget){
    zoomIn(false)
    }
})