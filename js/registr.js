let hambur = document.querySelector('.hamburger'),
    hambur2 = document.querySelector('.hamburger2');
let btn = document.querySelector('.btn');
let rightbox = document.querySelector('.right_nav');
btn.addEventListener('click', () => {
    rightbox.classList.toggle('active');
    hambur.classList.toggle('action2');
    hambur2.classList.toggle('action');
})


const form = document.querySelector('.form');
let input = document.querySelectorAll('.input');
let sumbit = document.querySelector('.sumbit');