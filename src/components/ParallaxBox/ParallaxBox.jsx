import React from "react"
import "./parallaxbox.css"

function ParallaxBox() {
	const clickHandler = () => {
		for (let i = 1; i <= 7; i++) {
			let element = document.getElementById(`parallaxLayer${i}`)
			element.style.setProperty("transform", `scale(1.${i})`)
			i !== 7 && element.style.setProperty("top", "70px")
		}

		const element = document.getElementById("parallaxText")

		document.getElementById("parallaxBox").remove()
		element.style.setProperty("transform", `scale(2)`)
		element.style.animation = "fadeout 0.7s forwards 0.2s"

		const contentContainer = document.getElementById("contentContainer")

		const header = document.getElementById("contentHeader")
		const footer = document.getElementById("contentFooter")
		const leftside = document.getElementById("contentEditor")
		const rightside = document.getElementById("contentTerminal")

		setTimeout(() => {
			element.style.display = "none"
			contentContainer.style.display = "grid"

			header.style.animation = "fadein 2s forwards"
			footer.style.animation = "fadein 2s forwards"
			leftside.style.animation = "fadein 1s forwards 0.5s"
			rightside.style.animation = "fadein 1s forwards 1s"
		}, 1000)
	}

	return (
		<div className="parallaxbox__container flex-row" id="parallaxBox">
			<div className="parallaxbox__click" onClick={clickHandler}></div>
		</div>
	)
}

export default ParallaxBox
