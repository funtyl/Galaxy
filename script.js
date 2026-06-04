// Algorithmics
// Пожалуйста, не меняй код ниже. Он необходим для правильной настройки позиционирования элементов :)
let team1 = document.querySelector('.team1')
let team2 = document.querySelector('.team2')
let team3 = document.querySelector('.team3')
let height = Math.max(parseInt(getComputedStyle(team1).getPropertyValue('height')), parseInt(getComputedStyle(team2).getPropertyValue('height')), parseInt(getComputedStyle(team3).getPropertyValue('height')))
team1.style.height = `${height}px`
team2.style.height = `${height}px`
team3.style.height = `${height}px`

// Функция, которую нужно вызвать при клике на стрелку
function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

function theme() {
    let header = document.querySelector('header')
    header.style.background = 'url(/uploads/2022/11/bg_space.png)'
}

function calc_flight() {
    let price = document.querySelector('.submit-select').value
    price = Number(price)
    let days_amount = document.querySelector('.days-input').value
    days_amount = Number(days_amount)
    let total = price * days_amount
    alert(total)
}

let calc_btn = document.querySelector('.submit-btn-calc')
calc_btn.addEventListener('click', calc_flight)

let change_btn = document.querySelector('.switch-theme-button')
change_btn.addEventListener('click', theme)

// Исправь ошибки, допущенные при обработке события
let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

let submit_btn = document.querySelector('.submit-btn-send')
function out() {
    submit_btn.style.background = '#C2AB99'
}

function enter() {
    submit_btn.style.background = 'transparent'
}

submit_btn.addEventListener('mouseenter', enter)
submit_btn.addEventListener('mouseleave', out)