const menuData = []

const createMenuItem = (image, name, price, description) => {
    return {
        name, image, price, description
    }
}

menuData.push(createMenuItem('breadwine.jpeg', 'Bread and Wine', '$3.99', 'Bread dipped in wine with a side of grapes'))
menuData.push(createMenuItem('epityrum.jpeg', 'Bread and Epityrum', '$3.99', 'Flat bread with olive relish and olives'))
menuData.push(createMenuItem('goatcheese.jpg', 'Bread and Goat Cheese', '$3.99', 'Bread and goat cheese served with honey on the side'))

const loadMenu = () => {
    const main = document.querySelector('main')

    const h1 = document.createElement('h1')
    h1.innerHTML = 'Menu'
    main.appendChild(h1)

    menuData.forEach(item => {
        const menuItem = document.createElement('figure')
        menuItem.classList.add('menu-item')

        const img = document.createElement('img')
        img.setAttribute('src', item.image)
        menuItem.appendChild(img)

        const right = document.createElement('div')

        const top = document.createElement('div')
        const name = document.createElement('h2')
        name.innerHTML = item.name
        top.appendChild(name)
        const price = document.createElement('div')
        price.innerHTML = item.price
        top.appendChild(price)
        right.appendChild(top)

        const desc = document.createElement('figcaption')
        desc.innerHTML = item.description
        right.appendChild(desc)

        menuItem.appendChild(right)
        main.appendChild(menuItem)
    })
}

export { loadMenu }