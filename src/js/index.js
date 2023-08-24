const service = [
    {
        icon: '/src/img/mobile.svg',
        title: "Responsive",
        id: 0,
        description: 'Looks great on any screen size!'
    },
    {
        icon: '/src/img/pen.svg',
        title: "Redesigned",
        id: 1,
        description: 'Freshly redesigned for Bootstrap 5.'
    },
    {
        icon: '/src/img/like.svg',
        title: "Favorited",
        id: 2,
        description: 'Millions of users 🤍 Start Bootstrap!'
    },
    {
        icon: '/src/img/moustache.svg',
        title: "Question",
        id: 3,
        description: 'I mustache you a question...'
    },
]

const services = [...new Set(service.map((item) => { return item }))]
let i = 0

document.getElementById('service-elements').innerHTML = services.map((item) => {
    let { icon, title, description } = item
    return (
        `<div class='elements'>
        <div class='element'>
        <figure>
          <img class='image'src=${icon}></img>
          </figure>
           <h4 class='element-title'>${title}</h4>
           <p class='element-description'>${description}</p>
        </div>
        </div>`
    )
}).join('')


const portfolio = [
    {
        img: '/src/img/portfolio-1.jpeg',
        title: "Stationary",
        id: 0,
        description: 'Strawberries are such a tasty snack, especially with a little sugar on top!'
    },
    {
        img: '/src/img/portfolio-2.jpeg',
        title: "Ice Cream",
        id: 1,
        description: 'A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!'
    },
    {
        img: '/src/img/portfolio-3.jpeg',
        title: "Strawberries",
        id: 2,
        description: 'Strawberries are such a tasty snack, especially with a little sugar on top!'
    },
    {
        img: '/src/img/portfolio-4.jpeg',
        title: "Workspace",
        id: 3,
        description: 'A yellow workspace with some scissors, pencils, and other objects.'
    },
]

const portfolioElement = [...new Set(portfolio.map((item) => { return item }))]
let a = 0

document.getElementById('captions').innerHTML = portfolioElement.map((item) => {
    let { img, title, description } = item
    return (
        `<div class='caption'>
        <div class='caption-element'>
        <figure class='figure'>
          <img class='image-caption'src=${img}></img>
          </figure>
          <div class='caption-content'>
            <div class='h2-title'>${title}</div>
            <p class='p-description'>${description}</p>
           </div>
        </div>
        </div>`
    )
}).join('')

