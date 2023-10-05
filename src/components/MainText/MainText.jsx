import './MainText.css'
import { useEffect } from "react"
import { motion } from 'framer-motion'
import { glitchTrigger } from "./glitchtrigger.js"


export default function MainText() {
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
                setTimeout(() => glitchTrigger({ element, beforeOffset: 1, afterOffset: 1, opacity: 0.8 }), 850)
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
			<motion.h1 
				className="glitch__effect"
				id="mainTextTitle"
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: '-200%' }
				}}
				animate='visible'
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				Martín Guevara
			</motion.h1>
			<h3 className="glitch__effect" id="mainTextSubtitle">Personal portfolio</h3>
			<p className="glitch__effect" id="mainTextParagraph">Scroll to discover!</p>
		</article>
	)
}
