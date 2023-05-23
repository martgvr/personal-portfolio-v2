import "./parallaxtext.css"
import React, { useEffect } from "react"
import { glitchTrigger } from "./glitchtrigger.js"

function ParallaxText() {
	useEffect(() => {
		let timerDone = 0

		function timer(time) {
			glitchTrigger({ element: "parallaxtextTitle", opacity: 0.8, afterOffset: 1, beforeOffset: 1 })
			setTimeout(() => glitchTrigger({ element: "parallaxtextTitle", opacity: 0.4 }), 100)
			setTimeout(() => glitchTrigger({ element: "parallaxtextTitle", opacity: 0.8 }), 150)
			setTimeout(() => glitchTrigger({ element: "parallaxtextTitle", opacity: 1 }), 200)
			setTimeout(() => glitchTrigger({ element: "parallaxtextTitle", opacity: 0.4 }), 650)
			setTimeout(() => glitchTrigger({ element: "parallaxtextTitle", beforeOffset: 1, afterOffset: 1, opacity: 0.8 }), 850)

			glitchTrigger({ element: "parallaxtextSubtitle", opacity: 0.8, afterOffset: 1, beforeOffset: 1 })
			setTimeout(() => glitchTrigger({ element: "parallaxtextSubtitle", opacity: 0.4 }), 100)
			setTimeout(() => glitchTrigger({ element: "parallaxtextSubtitle", opacity: 0.8 }), 150)
			setTimeout(() => glitchTrigger({ element: "parallaxtextSubtitle", opacity: 1 }), 200)
			setTimeout(() => glitchTrigger({ element: "parallaxtextSubtitle", opacity: 0.4 }), 650)
			setTimeout(() => glitchTrigger({ element: "parallaxtextSubtitle", beforeOffset: 1, afterOffset: 1, opacity: 0.8 }), 850)

			glitchTrigger({ element: "parallaxtextParagraph", opacity: 0.8, afterOffset: 1, beforeOffset: 1 })
			setTimeout(() => glitchTrigger({ element: "parallaxtextParagraph", opacity: 0.4 }), 100)
			setTimeout(() => glitchTrigger({ element: "parallaxtextParagraph", opacity: 0.8 }), 150)
			setTimeout(() => glitchTrigger({ element: "parallaxtextParagraph", opacity: 1 }), 200)
			setTimeout(() => glitchTrigger({ element: "parallaxtextParagraph", opacity: 0.4 }), 650)
			setTimeout(() => glitchTrigger({ element: "parallaxtextParagraph", beforeOffset: 1, afterOffset: 1, opacity: 0.8 }), 850)

			setTimeout(() => (timerDone = 1), time)
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
	}, [])

	return (
		<article className="parallaxtext__container flex-column" id="parallaxText">
			<h1 className="glitch__effect" id="parallaxtextTitle">
				Martín Guevara
			</h1>
			<h3 className="glitch__effect" id="parallaxtextSubtitle">
				Personal portfolio
			</h3>
			<p className="glitch__effect" id="parallaxtextParagraph">
				Click here to discover!
			</p>
		</article>
	)
}

export default ParallaxText
