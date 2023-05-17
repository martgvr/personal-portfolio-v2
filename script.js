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

const glitch = document.getElementById("glitch");
glitch.style.setProperty('--glitch-before-left', '15px');
glitch.style.setProperty('--glitch-after-left', '15px');

let timerDone = 0

function timer(time) {
    console.log('Ejecutando con delay de:', time)
    let afterOffset = Math.floor(Math.random() * 15)
    let beforeOffset = Math.floor((Math.random() * 10) + 20)

    glitch.style.setProperty('--glitch-before-left', beforeOffset + 'px');
    glitch.style.setProperty('--glitch-after-left', afterOffset + 'px');
    glitch.style.setProperty('opacity', '0.8');

    setTimeout(() => {
        let afterOffset = Math.floor(Math.random() * 15)
        let beforeOffset = Math.floor((Math.random() * 10) + 20)
    
        glitch.style.setProperty('opacity', '0.4');
        glitch.style.setProperty('left', '15px');
        glitch.style.setProperty('--glitch-before-left', beforeOffset + 'px');
        glitch.style.setProperty('--glitch-after-left', afterOffset + 'px');
    }, 100);

    setTimeout(() => {
        let afterOffset = Math.floor(Math.random() * 15)
        let beforeOffset = Math.floor((Math.random() * 10) + 20)
    
        glitch.style.setProperty('--glitch-before-left', beforeOffset + 'px');
        glitch.style.setProperty('--glitch-after-left', afterOffset + 'px');
        glitch.style.setProperty('opacity', '0.8');
    }, 150);

    setTimeout(() => {
        let afterOffset = Math.floor(Math.random() * 15)
        let beforeOffset = Math.floor((Math.random() * 10) + 20)

        glitch.style.setProperty('opacity', '1');
        glitch.style.setProperty('--glitch-before-left', beforeOffset + 'px');
        glitch.style.setProperty('--glitch-after-left', afterOffset + 'px');

    }, 200);

    setTimeout(() => {
        glitch.style.setProperty('--glitch-before-left', '15px');
        glitch.style.setProperty('--glitch-after-left', '15px');
        glitch.style.setProperty('opacity', '0.8');
    }, 650);

    setTimeout(() => {
        console.log('LISTO!')
        timerDone = 1
    }, time);
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