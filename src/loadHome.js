import { selectTab } from "./index"

const loadHome = () => {
    const main = document.querySelector('main')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'The taste of Ancient Greece on your plate!'
    main.appendChild(h1)

    const button = document.createElement('button')
    button.innerHTML = 'See Menu'
    button.addEventListener('click', () => {
        selectTab('menu')
    })
    main.appendChild(button)
}

export { loadHome }