import "./AboutStack.css"
import Reveal from "../../components/Reveal/Reveal"

export default function AboutStack() {
	return (
		<div className="aboutstack__container">
			<Reveal>
				<h1>Stack tecnológico</h1>
			</Reveal>

			<div className="aboutstack__technologies flex-row">
				<div>
					<Reveal slide delay={0.7}>
						<div className="frontend__container">
							<h2>Frontend</h2>
						</div>
					</Reveal>
				</div>

				<div>
					<Reveal slide>
						<div className="frontend__container">
							<h2>Backend</h2>
						</div>
					</Reveal>
				</div>
			</div>
		</div>
	)
}
