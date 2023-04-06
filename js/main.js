let hambur = document.querySelector('.hamburger'),
    hambur2 = document.querySelector('.hamburger2');
let btn = document.querySelector('.btn');
let rightbox = document.querySelector('.right_nav');
btn.addEventListener('click', () => {
    rightbox.classList.toggle('active');
    hambur.classList.toggle('action2');
    hambur2.classList.toggle('action');
})









let boxbtn = document.querySelector('.for_imgbtn1');
let boxbtn2 = document.querySelectorAll('.for_imgbtn');
let ar = document.querySelectorAll('.ar');
boxbtn.addEventListener('click', () => {
    ar[0].classList.toggle('active');
})
let left1 = document.querySelector('.article_box-left2')
boxbtn2[0].addEventListener('click', () => {
    ar[1].classList.toggle('active');
})
boxbtn2[1].addEventListener('click', () => {
    console.log('hi');
    ar[2].classList.toggle('active');
})
boxbtn2[2].addEventListener('click', () => {
    console.log('hi');
    ar[3].classList.toggle('active');
})