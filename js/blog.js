let hambur = document.querySelector('.hamburger'),
    hambur2 = document.querySelector('.hamburger2');
let btn = document.querySelector('.btn');
let rightbox = document.querySelector('.right_nav');
btn.addEventListener('click', () => {
    rightbox.classList.toggle('active');
    hambur.classList.toggle('action2');
    hambur2.classList.toggle('action');
})


let section_box = document.querySelector('.section_box');

const inputadd = document.querySelector('.input');
const fragments = document.createDocumentFragment();

let searchurl = `https://api.newscatcherapi.com/v2/search?q=`;
let url = 'https://api.newscatcherapi.com/v2/search?q=Hello';

function datafetch() {


    if (inputadd.value) {
        url = `${searchurl}${inputadd.value}`

        console.log(url);

    } else {
        url = 'https://api.newscatcherapi.com/v2/search?q=Hello';
    }
    const options = {
        method: 'GET',
        params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
            'x-api-key': '7zXRDdEWeo8CLH-HnBddCPhKrgOFKfpB2h45yctVy4Q'
        },

    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {

            section_box.innerHTML = '';

            let dataSlice = data.articles.slice(13, 17)
            dataSlice.map((business) => {
                const { media, author, title, summary } = business;
                //image
                let image = document.createElement('img');
                image.classList.add('image')
                image.src = media;
                image.alt = title;
                //forimage
                let forimg = document.createElement('div');
                forimg.classList.add('for-image');
                forimg.appendChild(image)
                const section_boxmin = document.createElement('div');
                section_boxmin.classList.add('section_box-min');



                section_boxmin.appendChild(forimg)
                let text = document.createElement('p');
                text.classList.add('buisnes');
                text.textContent = author;

                fragments.appendChild(text)
                let starttitle = document.createElement('h2');
                starttitle.classList.add('title');
                starttitle.textContent = title;

                fragments.appendChild(starttitle)

                let span = document.createElement('p');
                span.classList.add('text');
                span.textContent = summary;
                fragments.appendChild(span);
                let fortitle = document.createElement('div');
                fortitle.classList.add('for-title');
                fortitle.appendChild(fragments);


                section_boxmin.appendChild(fortitle)
                section_box.appendChild(section_boxmin)
            })

        })
        .catch(err => console.error(err));


}

datafetch();
inputadd.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        datafetch();
        inputadd.value = '';
    }

});