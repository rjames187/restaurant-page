const createNav = () => {
    const nav = document.createElement('nav')

    const left = document.createElement('div')
    left.innerHTML = 'Corinthian Kitchen'
    nav.appendChild(left)

    const right = document.createElement('div')
    ['home', 'menu', 'contact'].forEach(e => {
        const tab = document.createElement('div')
        tab.innerHTML = e
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