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



const options = {
    method: 'GET',
    params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
    headers: {
        'x-api-key': 'haGR6PyarEfkDWgSU-KGC-4sxMqPSgy8b5-56LMmBD8'
    },

};
let sectionstart = document.querySelector('.section_start-box');
let leftbox = document.querySelector('.section_box-left'),
    forimg = document.querySelector('.left_for-img'),
    fortitle = document.querySelector('.left_for-title');


let url = 'https://api.newscatcherapi.com/v2/search?q=Business';
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        let dataslice = data.articles.slice(1, 4);
        let fatchdatatemp = dataslice.map((Business) => {
            const { media, author, title, summary } = Business;

            return `
            <div class="section_box-left">
            <div class="left_for-img">
                <img class="section_image" src="${media}" alt="api">
            </div>
            <div class="left_for-title">
                <span class="span_nav3">${author}</span>
                <h3 class="section_title">${title}</h3>
                <p class="section_text">${summary}</p>
            </div>
        </div>
            `
        })
        sectionstart.innerHTML = fatchdatatemp.join()
    })
    .catch(err => console.error(err));