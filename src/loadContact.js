const loadContact = () => {
    const main = document.querySelector('main')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Contact Us'
    main.appendChild(h1)

    const h2 = document.createElement('h2')
    h2.innerHTML = 'Eumaeus - Head Chef'
    main.appendChild(h2)

    const p = document.createElement('p')
    p.innerHTML = 'Phone: (000) - 000 - 0000'
    main.appendChild(p)
}

export { loadContact }