const darkBtn = document.querySelector('#dark')
const lightBtn = document.querySelector('#light')
const headerText = document.querySelector('.heading-primary')
const body = document.querySelector('body')
const book = document.querySelector('.book__form')
const buttonHead = document.querySelector('.btn')
const footer = document.querySelector('footer')
const footerCopy = document.querySelector('.footer__copyright')
const navigation = document.querySelector('.navigation__button')
const navigationIcon = document.querySelector('.navigation__icon')
const sections = document.querySelectorAll('section')
const featuresBox = document.querySelectorAll('.feature-box')
const cards = document.querySelectorAll('.card__side')
const cardsCta = document.querySelectorAll('.card__cta')
const galleries = document.querySelectorAll('.gallery-box')
const lists = document.querySelectorAll('li')
const logo = document.querySelector('.header__logo')

// function change to dark
function changeToColor(bgColor, textColor) {
    // change body to certain color

    // body
    body.style.backgroundColor = bgColor
    body.style.color = textColor
    // header
    // dark
    if (bgColor == 'rgb(72, 72, 72)') {
        headerText.style.color = 'rgb(72, 72, 72)'
        buttonHead.classList.remove('btn--white')
        buttonHead.classList.add('btn--green')
    } else if (bgColor == 'rgb(242, 242, 242)') {
        // light
        headerText.style.color = '#eee'
        buttonHead.classList.remove('btn--green')
        buttonHead.classList.add('btn--white')
    } else {
        return
    }
    // logo
    if (bgColor == 'rgb(72, 72, 72)') {
        // dark
        logo.src = './img/logo-green-2x-bali.png'
    } else if (bgColor == 'rgb(242, 242, 242)') {
        // light
        logo.src = './img/logo-white-bali.png'

    } else {
        return
    }
    // book
    book.style.backgroundColor = bgColor
    book.style.color = textColor
    // footer
    footer.style.backgroundColor = bgColor
    footer.style.color = textColor
    footerCopy.style.color = textColor
    // navigation
    navigation.style.backgroundColor = bgColor
    navigationIcon.style.color = textColor
    // sections
    sections.forEach(section => {
        section.style.backgroundColor = bgColor
        section.style.color = textColor
    })
    // feaure box
    featuresBox.forEach(featureBox => {
        featureBox.style.backgroundColor = bgColor
        featureBox.style.color = textColor
    })
    // cards
    cards.forEach(card => {
        card.style.backgroundColor = bgColor
        card.style.color = textColor
    })
    // galleries
    galleries.forEach(gallery => {
        gallery.style.backgroundColor = bgColor
        gallery.style.color = textColor
    })
    // list
    lists.forEach(list => {
        list.style.borderColor = textColor
    })
}


darkBtn.addEventListener('click', () => changeToColor('rgb(72, 72, 72)', 'rgb(242, 242, 242)'))
lightBtn.addEventListener('click', () => changeToColor('rgb(242, 242, 242)', 'rgb(72, 72, 72)'))

// function change to light