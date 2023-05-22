for (let i = 1; i <= 7; i++) {
    const element = document.getElementById(`wallpaperLayer${i}`)
    element.style.backgroundImage = i === 7 ? `url("./src/images/c${i}.jpg")` : `url("./src/images/c${i}.svg")`
    element.style.filter = "brightness(0.8) saturate(0.3)"
    element.style.zIndex = 8 - i
}

// PARALLAX EVENT
const clickableBox = document.getElementById('clickableBox')

clickableBox.addEventListener('click', () => {
    for (let i = 1; i <= 7; i++) {
        let element = document.getElementById(`wallpaperLayer${i}`)
        element.style.setProperty('transform', `scale(1.${i})`)
        i !== 7 && element.style.setProperty('top', '70px')
    }

    element = document.getElementById('textCotainer')
    document.getElementById('clickableBox').remove()
    element.style.setProperty('transform', `scale(2)`)
    element.style.animation = 'fadeout 0.7s forwards 0.2s'

    const contentContainer = document.getElementById('contentContainer')

    const header = document.getElementById('header')
    const footer = document.getElementById('footer')
    const leftside = document.getElementById('leftside')
    const rightside = document.getElementById('rightside')

    setTimeout(() => {
        element.style.display = "none"
        contentContainer.style.display = "flex"

        header.style.animation = 'fadein 2s forwards'
        footer.style.animation = 'fadein 2s forwards'
        leftside.style.animation = 'fadein 1s forwards 0.5s'
        rightside.style.animation = 'fadein 1s forwards 1s'
    }, 1000)
})

// GLITCH EFFECT
const glitchTrigger = ({ element, afterOffset, beforeOffset, opacity, content }) => {
    afterOffset = afterOffset || Math.floor(Math.random() * 15)
    beforeOffset = beforeOffset || Math.floor((Math.random() * 10) + 20)
 
    const targetElement = document.getElementById(element)

    targetElement.setAttribute('glitchContent', content || targetElement.innerText)
    targetElement.style.setProperty('opacity', opacity)
    targetElement.style.setProperty('--glitch-after-offset', afterOffset + 'px')
    targetElement.style.setProperty('--glitch-before-offset', beforeOffset + 'px')
}

const glitch = document.getElementById("glitch")
const paragraph = document.getElementById("paragraph")

let timerDone = 0

function timer(time) {
    glitchTrigger({ element: 'glitch', opacity: 0.8 })
    setTimeout(() => glitchTrigger({ element: 'glitch', opacity: 0.4 }), 100)
    setTimeout(() => glitchTrigger({ element: 'glitch', opacity: 0.8 }), 150)
    setTimeout(() => glitchTrigger({ element: 'glitch', opacity: 1 }), 200)
    setTimeout(() => glitchTrigger({ element: 'glitch', opacity: 0.4 }), 650)
    setTimeout(() => glitchTrigger({ element: 'glitch', beforeOffset: 15, afterOffset: 15, opacity: 0.8 }), 850)

    glitchTrigger({ element: 'paragraph', opacity: 0.8, content: '' })
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 0.4, content: ' ', beforeOffset: Math.floor(Math.random() * 400), afterOffset: Math.floor(Math.random() * 400) }), 100)
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 0.8, content: '', beforeOffset: Math.floor(Math.random() * 400), afterOffset: Math.floor(Math.random() * 400) }), 150)
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 1, content: ' ', beforeOffset: Math.floor(Math.random() * 400), afterOffset: Math.floor(Math.random() * 400) }), 200)
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 0.4, content: ''  }), 650)
    setTimeout(() => glitchTrigger({ element: 'paragraph', beforeOffset: 342, afterOffset: 342, opacity: 0.8, content: ' '  }), 850)

    setTimeout(() =>  timerDone = 1, time)
}

timer(1000)

setInterval(() => {
    let initialTimeout = Math.floor(Math.random() * 10) * 1000

    setTimeout(() => {
        if (timerDone == 1) {
            timer(initialTimeout)
            timerDone = 0
        }
    }, initialTimeout)
}, 1000)