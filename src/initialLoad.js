import { selectTab } from "./index"

const createNav = () => {
    const nav = document.createElement('nav')

    const left = document.createElement('div')
    left.innerHTML = 'Corinthian Kitchen'
    nav.appendChild(left)

    const right = document.createElement('div')
    ;['home', 'menu', 'contact'].forEach(e => {
        const tab = document.createElement('div')
        tab.innerHTML = e.charAt(0).toUpperCase() + e.slice(1)
        tab.setAttribute('id', `nav-${e}`)
        tab.addEventListener('click', () => {
            selectTab(e)
        })
        right.appendChild(tab)
    })
    nav.appendChild(right)
    
    return nav
}

const createMain = () => {
    const background = document.createElement('div')

    const main = document.createElement('main')
    background.appendChild(main)

    return background
}

const createFooter = () => {
    const footer = document.createElement('footer')

    const link = document.createElement('a')
    link.innerHTML = 'View Source'
    link.setAttribute('href', 'https://github.com/rjames187/restaurant-page')
    footer.appendChild(link)

    return footer
}

const initialLoad = () => {
    const content = document.getElementById('content')

    const nav = createNav()
    content.appendChild(nav)

    const background = createMain()
    content.appendChild(background)

    const footer = createFooter()
    content.appendChild(footer)
}

export { initialLoad }