// SVG ASSIGNMENT
for (let i = 1; i <= 7; i++) {
    const element = document.getElementById(`layer${i}`)
    element.style.backgroundImage = i === 7 ? `url("./src/images/c${i}.jpg")` : `url("./src/images/c${i}.svg")`
    element.style.zIndex = 8 - i
}

// PARALLAX EVENT
const clickableBox = document.getElementById('clickableBox')

clickableBox.addEventListener('click', () => {
    // ZOOM EFFECT
    for (let i = 1; i <= 7; i++) {
        let element = document.getElementById(`layer${i}`)
        element.style.setProperty('transform', `scale(1.${i})`)
        i !== 7 && element.style.setProperty('top', '70px')
    }

    // FADE OUT
    element = document.getElementById('textCotainer')
    element.style.setProperty('transform', `scale(2)`)
    element.style.animation = 'fadeout 0.7s forwards 0.2s'
})

// GLITCH EFFECT
const glitchTrigger = ({ element, beforeOffset, afterOffset, opacity, content }) => {
    beforeOffset = beforeOffset || Math.floor((Math.random() * 10) + 20)
    afterOffset = afterOffset || Math.floor(Math.random() * 15)

    const targetElement = document.getElementById(element)

    targetElement.setAttribute('glitchContent', content || targetElement.innerText)
    targetElement.style.setProperty('opacity', opacity)
    targetElement.style.setProperty('--glitch-after-left', afterOffset + 'px')
    targetElement.style.setProperty('--glitch-before-left', beforeOffset + 'px')
} 

const paragraph = document.getElementById("paragraph")
const glitch = document.getElementById("glitch")
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