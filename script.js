const layer1 = document.getElementById('layer1')
const layer2 = document.getElementById('layer2')
const layer3 = document.getElementById('layer3')
const layer4 = document.getElementById('layer4')
const layer5 = document.getElementById('layer5')
const layer6 = document.getElementById('layer6')
const layer7 = document.getElementById('layer7')

const clickableBox = document.getElementById('clickableBox')

clickableBox.addEventListener('click', () => {
    layer1.style.setProperty('top', '70px')
    layer1.style.setProperty('transform', 'scale(1.1)')
    layer2.style.setProperty('top', '70px')
    layer2.style.setProperty('transform', 'scale(1.2)')
    layer3.style.setProperty('top', '70px')
    layer3.style.setProperty('transform', 'scale(1.3)')
    layer4.style.setProperty('top', '70px')
    layer4.style.setProperty('transform', 'scale(1.4)')
    layer5.style.setProperty('top', '70px')
    layer5.style.setProperty('transform', 'scale(1.5)')
    layer6.style.setProperty('top', '70px')
    layer6.style.setProperty('transform', 'scale(1.6)')
    
    layer7.style.setProperty('transform', 'scale(1.7)')  
})

const glitchTrigger = ({ element, beforeOffset, afterOffset, opacity, content }) => {
    beforeOffset = beforeOffset || Math.floor((Math.random() * 10) + 20)
    afterOffset = afterOffset || Math.floor(Math.random() * 15)

    const targetElement = document.getElementById(element)

    targetElement.setAttribute('glitchContent', content || targetElement.innerText)
    targetElement.style.setProperty('opacity', opacity)
    targetElement.style.setProperty('--glitch-after-left', afterOffset + 'px')
    targetElement.style.setProperty('--glitch-before-left', beforeOffset + 'px')
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

    glitchTrigger({ element: 'paragraph', opacity: 0.8, content: ' ' })
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 0.4, content: ' ' }), 100)
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 0.8, content: ' ' }), 150)
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 1, content: ' ' }), 200)
    setTimeout(() => glitchTrigger({ element: 'paragraph', opacity: 0.4, content: ' '  }), 650)
    setTimeout(() => glitchTrigger({ element: 'paragraph', beforeOffset: 342, afterOffset: 342, opacity: 0.8, content: ' '  }), 850)

    setTimeout(() =>  timerDone = 1, time);
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
}, 1000);