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


form.addEventListener('submit', () => {
    if (input[0].value) {
        input[0].classList.remove('notactive');
        input[0].classList.add('active');
    } else {
        input[0].classList.add('notactive');
    }
    if (input[1].value) {
        input[1].classList.remove('notactive');
        input[1].classList.add('active');
    } else {
        input[1].classList.add('notactive');
    }
    if (input[2].value) {
        input[2].classList.remove('notactive');
        input[2].classList.add('active');
    } else {
        input[2].classList.add('notactive');
    }
    // if (input[3].value) {
    //     input[3].classList.add('active');
    // } else {
    //     input[3].classList.add('notactive');
    // }
    // if (input[4].value) {
    //     input[4].classList.add('active');
    // } else {
    //     input[4].classList.add('notactive');
    // }
    if (!input[3].value && !input[4].value) {
        input[3].classList.add('notactive');
        input[4].classList.add('notactive');
    } else if (input[3].value === input[4].value) {
        input[3].classList.remove('notactive');
        input[4].classList.remove('notactive');
        input[3].classList.add('active');
        input[4].classList.add('active');
    } else {
        setTimeout(() => {
            alert('Parolda hatolik bor');
        }, 500)
        input[3].classList.add('notactive');
        input[4].classList.add('notactive');
    }
    if (input[0].value && input[1].value && input[2].value) {
        if (!input[3].value && !input[4].value) {
            input[3].classList.add('notactive');
            input[4].classList.add('notactive');
        } else if (input[3].value === input[4].value) {
            input[3].classList.remove('notactive');
            input[4].classList.remove('notactive');
            input[3].classList.add('active');
            input[4].classList.add('active');
            setTimeout(() => {
                alert('Registratsiyadan yaxshi otdingiz');
            }, 500)
        } else {
            input[3].classList.add('notactive');
            input[4].classList.add('notactive');
        }

    } else {
        setTimeout(() => {
            alert('Iltimos hamma bolimni toldiring');
        }, 500)
    }

})