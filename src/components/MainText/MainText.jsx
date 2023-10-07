import './MainText.css'
import { useEffect, useState } from "react"
import { glitchTrigger } from "./glitchtrigger.js"
import { useMotionValueEvent, useScroll } from "framer-motion"

export default function MainText() {
	const { scrollY } = useScroll()
	const [scrollPosition, setScrollPosition] = useState(0)

	useMotionValueEvent(scrollY, "change", (latest) => setScrollPosition(latest))

    useEffect(() => {
		let timerDone = 0

		function timer(time) {
            const elementsToGlitch = ['mainTextTitle', 'mainTextSubtitle', 'mainTextParagraph']

            elementsToGlitch.forEach(element => {
                glitchTrigger({ element, opacity: 0.8, afterOffset: 1, beforeOffset: 1 })
                setTimeout(() => glitchTrigger({ element, opacity: 0.4 }), 100)
                setTimeout(() => glitchTrigger({ element, opacity: 0.8 }), 150)
                setTimeout(() => glitchTrigger({ element, opacity: 1 }), 200)
                setTimeout(() => glitchTrigger({ element, opacity: 0.4 }), 650)
                setTimeout(() => glitchTrigger({ element, beforeOffset: 1, afterOffset: 1, opacity: 1 }), 850)
            })

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
		<article className="maintext__container flex-column"> 
			<h1 className="glitch__effect" id="mainTextTitle" style={{ top: scrollPosition * (-0.3) }}>Martín Guevara</h1>
			<h3 className="glitch__effect" id="mainTextSubtitle" style={{ top: scrollPosition * (-0.2) }}>Personal portfolio</h3>
			<p className="glitch__effect" id="mainTextParagraph" style={{ top: scrollPosition * (-0.05) }}>
				{	
					scrollPosition < 200 ? 'Scroll to discover' : 'Keep scrolling!!!!'
				}
			</p>
		</article>
	)
}
