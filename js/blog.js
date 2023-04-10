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
let pagenation = document.querySelector('.page');
pagenation.classList.add('box-page');
let searchurl = `https://api.newscatcherapi.com/v2/search?q=`;
let url = `https://api.newscatcherapi.com/v2/search?q=Hello`;

let page = 1;

function datafetch() {


    if (inputadd.value) {
        url = ` ${searchurl}${inputadd.value}`

        console.log(url);

    } else {
        url = 'https://api.newscatcherapi.com/v2/search?q=Apple';
    }
    const options = {
        method: 'GET',
        params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
        headers: {
            'x-api-key': `DdivjITW7sJuyftaeyTmm05qvmAl_Kp3_Z-gQxpM7v4`
        },

    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let totalpages = data.total_pages > 10 ? 10 : data.total_pages;

            section_box.innerHTML = '';
            let i = (page - 1) * 4
            let dataSlice = data.articles.slice(i, i + 4)
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




            pagenation.innerHTML = '';
            if (totalpages > 1) {
                for (let i = 1; i < totalpages; i++) {
                    let buttonpage = document.createElement('button');
                    buttonpage.classList.add('btnpage2');
                    buttonpage.innerText = i;
                    pagenation.appendChild(buttonpage)
                    if (page === i) {
                        buttonpage.classList.add('btnpage')
                    }
                    buttonpage.addEventListener('click', () => {
                        page = i;
                        datafetch();
                    })

                }
            }

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






//i34ujtciu4ehteuviruthbr










// function fetchData() {
//     const inputCondition = search.value;
//     if (inputCondition) {
//         url = ${searchUrl}${inputCondition}
//         console.log('if');
//     } else {
//         console.log('else');
//         url = https://api.newscatcherapi.com/v2/search?q=Business
//     }

//     const options = {
//         method: 'GET',
//         params: { q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '1' },
//         headers: {
//             'x-api-key': 'Pfe8gDS-TQj5Vl_G8dtx6KovxR16c4asK4uTZLIaEPM'
//         },

//     };

//     fetch(url, options).then(response => response.json()).then(data => {
//             let totalPage= data.total_pages>8 ? 8: data.total_pages;
//             if (data.articles === undefined) {
//                 blog.innerHTML='';
//                 console.log('elde');
//                 blog.textContent = 'Nothing Found'

//             }
//             else {
//                 blog.innerHTML='';
//                 console.log('ifif');
//                 let i = (page-1)*3
//                 let dataslice = data.articles.slice(i,i+3)
//                 dataslice.map((Business) => {
//                     const { media, author, title, summary } = Business;
//                      console.log(Business);
//                      const card = document.createElement('div')
//                      card.classList.add('blog__card')
//                      blog.appendChild(card)

//                      const img = document.createElement('img')
//                      img.classList.add('blog__card-img')
//                      card.appendChild(img)
//                      img.src = media
//                      img.alt= title

//                 const bar = document.createElement('div')
//                 bar.classList.add('blog__card-bar')
//                 card.appendChild(bar)



//                 const span = document.createElement('span')
//                 span.classList.add('blog__card-span')
//                 bar.appendChild(span)
//                 span.textContent=author


//                 const des = document.createElement('h3')
//                 des.classList.add('blog__card-des')
//                 bar.appendChild(des)
//                 des.textContent=title



//                 const par = document.createElement('p')
//                 par.classList.add('blog__card-par')
//                 bar.appendChild(par)
//                 par.textContent=summary
//                 })

//             }
//             pegenation.innerHTML= '';

//             if (totalPage>1) {
//                 for (let index = 1; index <= totalPage; index++) {
//                     const btnPage =document.createElement('button')
//                     btnPage.innerText = index;
//                     btnPage.classList.add('btnPage')
//                     if (page===index) {
//                         btnPage.classList.add('activeBtn')

//                     } 
//                     btnPage.addEventListener('click',(e)=>{
//                         e.preventDefault();
//                         page = index;
//                         fetchData();
//                     }) 
//                     pegenation.appendChild(btnPage)                  
//                 }

//             }

//         })


// }

//         fetchData();
//         search.addEventListener("keypress", function(event) {
//           if (event.key === "Enter") {
//             event.preventDefault();

//             fetchData();

//           }
//         });