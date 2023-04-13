let hambur = document.querySelector('.hamburger'),
    hambur2 = document.querySelector('.hamburger2');
let btn = document.querySelector('.btn');
let rightbox = document.querySelector('.right_nav');
btn.addEventListener('click', () => {
    rightbox.classList.toggle('active');
    hambur.classList.toggle('action2');
    hambur2.classList.toggle('action');
})

let form = document.querySelector('.form');
// let title = document.getElementById('title').value;
// let text = document.getElementById('text').value;
let sectionbox = document.querySelector('.allfilles');
let box = document.querySelector('.box');

let sectionbox2 = document.querySelector('.allfilles2');





let url = `https://reqres.in/api/users`;

fetch(url).then((response) => response.json()).then((data) => {
    let dataslice = data.data.slice(0, 1);
    console.log(data);
    let datamap = dataslice.map((user) => {
        const { avatar, first_name, last_name, email, id } = user;
        return `
<div class="section-box">
<div class="section-box-forimg">
<img class="image-avatar" src=${avatar} alt="...">
</div>
<div class="section-about">
    <div class="forname">
    <h3 class="name">${first_name}</h3>
    <h3 class="surname"> ${last_name}</h3>
    </div>
    <div class="for-data">
    <a class="data" href="mailto:">${email}</a>
    </div>
</div>
</div>

`
    })
    sectionbox.innerHTML = datamap.join('');

})
sectionbox2.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('dlete')) {
        datadelete(e.target.classList.contains('dlete')).then(() => {
            const removebtn = e.target.closest('.allfilles2');
            removebtn.remove();
            sectionbox2.innerHTML = '';
        })
    }

})


form.addEventListener('submit', (e) => {
    e.preventDefault()

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let mail = document.getElementById('mail').value;
    let image = document.getElementById('file').files[0];
    const read = new FileReader();
    read.readAsDataURL(image);
    read.onload = (f) => {
        f.preventDefault();

        const imageurl = read.result;
        const datapost = {
            firstname: name,
            lastname: surname,
            email: mail
        }

        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(datapost)
        }).then((response) => response.json()).then((data) => {
            console.log(data);
            sectionbox2.innerHTML += `
        <div class="section-box">
        <div class="section-box-forimg">
        <img class="image-avatar" src='${imageurl}' alt="...">
        </div>
        <div class="section-about">
            <div class="forname">
            <h3 class="name">${data.firstname}</h3>
            <h3 class="surname"> ${data.lastname}</h3>
            </div>
            <div class="for-data">
            <a class="data" href="mailto:">${data.email}</a>
            </div>
        </div>
        <button class="dlete">Delete</button>
        </div>
        
        `
            box.appendChild(sectionbox2)
        })

        // box.innerHTML = '';
    }
    form.reset();
})





async function datadelete(delet) {
    try {
        await fetch(`${url}${delet}`, {
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error);
    }
}