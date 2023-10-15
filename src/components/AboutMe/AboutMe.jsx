import './AboutMe.css'
import Reveal from "../../components/Reveal/Reveal"
import Button from "../../components/Button/Button"

export default function AboutMe() {
	return (
		<div className='aboutme__container flex-column'>
			<Reveal delay={0.1}>
				<h1>Hola! soy Martín.</h1>
			</Reveal>
			<Reveal delay={0.2}>
				<h2>Desarrollador Full Stack</h2>
			</Reveal>
			<Reveal delay={0.3}>
				<p>Desarrollador en Stack MERN y estudiante universitario con una sólida formación en el desarrollo de aplicaciones web.</p>
			</Reveal>
			<Reveal delay={0.4}>
				<div className="aboutme__icons flex-row">
					<a href="">
						<img src="github.png" alt="" />
					</a>
					<a href="">
						<img src="linkedin.png" alt="" />
					</a>
				</div>
			</Reveal>
			<Reveal delay={0.5}>
				<Button text={"Descargar CV"} />
			</Reveal>
		</div>
	)
}
