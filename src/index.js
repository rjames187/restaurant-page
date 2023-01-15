import { initialLoad } from "./initialLoad"
import { loadHome } from "./loadHome"
import { loadMenu } from "./loadMenu"
import { loadContact } from "./loadContact"

const wipeMain = () => {
    const main = document.querySelector('main')
    main.innerHTML = ''
}

const selectTab = (tab) => {
    const tabs = document.querySelectorAll('nav > div:last-child > div')
    tabs.forEach((e) => {
        e.classList.remove('selected')
    })

    const selected = document.getElementById(`nav-${tab}`)
    selected.classList.toggle('selected')

    wipeMain()

    switch (tab) {
        case 'home':
            loadHome()
            break
        case 'menu':
            loadMenu()
            break
        case 'contact':
            loadContact()
            break
        default:
            loadHome()
            break
    }
}

initialLoad()

selectTab('home')

export { selectTab }