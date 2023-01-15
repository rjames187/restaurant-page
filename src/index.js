import { initialLoad } from "./initialLoad"
import { loadHome } from "./loadHome"

const selectTab = (tab) => {
    const tabs = document.querySelectorAll('nav > div:last-child > div')
    tabs.forEach((e) => {
        e.classList.remove('selected')
    })

    const selected = document.getElementById(`nav-${tab}`)
    selected.classList.toggle('selected')

    switch (tab) {
        case 'home':
            loadHome()
        default:
            loadHome()
    }
}

initialLoad()

selectTab('home')
loadHome()

export { selectTab }