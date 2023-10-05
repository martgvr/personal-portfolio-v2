export const glitchTrigger = ({ element, afterOffset, beforeOffset, opacity, content }) => {
	afterOffset = afterOffset || Math.floor(Math.random() * -15)
	beforeOffset = beforeOffset || Math.floor(Math.random() * 15)

	const targetElement = document.getElementById(element)

	targetElement.setAttribute("glitchContent", content || targetElement.innerText)
	targetElement.style.setProperty("opacity", opacity)
	targetElement.style.setProperty("--glitch-after-offset", afterOffset + "px")
	targetElement.style.setProperty("--glitch-before-offset", beforeOffset + "px")
}