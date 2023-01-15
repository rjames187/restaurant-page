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

const initialLoad = () => {
    const content = document.getElementById('content')


}