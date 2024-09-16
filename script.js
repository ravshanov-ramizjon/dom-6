const open = document.querySelector('[data-open]')
const dialog = document.querySelector('[data-dialogone]')
const close = document.querySelector('[data-close]')
const burger = document.querySelector('[data-burger]')
const dialogTwo = document.querySelector('[data-dialogtwo]')


open.onclick = () => {

    dialog.classList.remove('active')

}
close.onclick = () => {
    dialog.classList.add('active')
}
burger.onclick = () => {
    if (dialogTwo.classList.contains('big_active')) {
        dialogTwo.classList.remove('big_active')
    }else{
        dialogTwo.classList.add('big_active')

    }
}