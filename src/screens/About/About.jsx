import "./about.css"
import { useState } from "react"

import Reveal from "../../components/Reveal/Reveal"
import AboutMe from "../../components/AboutMe/AboutMe"
import AboutStack from "../../components/AboutStack/AboutStack"
import AboutEducation from "../../components/AboutEducation/AboutEducation"

export default function About() {
	const [showingSection, setShowingSection] = useState(1)

	return (
		<article className="about__container flex-column">

			<ul className="about__navbar flex-row">
				<Reveal slide delay={0.1}>
					<li className={showingSection == 1 ? "active" : ""} onClick={() => setShowingSection(1)}>
						Quién soy?
					</li>
				</Reveal>
				<Reveal slide delay={0.2}>
					<li className={showingSection == 2 ? "active" : ""} onClick={() => setShowingSection(2)}>
						Stack
					</li>
				</Reveal>
				<Reveal slide delay={0.3}>
					<li className={showingSection == 3 ? "active" : ""} onClick={() => setShowingSection(3)}>
						Estudios
					</li>
				</Reveal>
			</ul>

			<div className="about__text flex-column">
				{showingSection == 1 && <AboutMe />}
				{showingSection == 2 && <AboutStack />}
				{showingSection == 3 && <AboutEducation />}
			</div>
			
			<div className="shape__divider">
				<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
					<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
				</svg>
			</div>
		</article>
	)
}
