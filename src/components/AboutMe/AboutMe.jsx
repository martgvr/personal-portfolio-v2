import Reveal from "../../components/Reveal/Reveal"
import Button from "../../components/Button/Button"

export default function AboutMe() {
	return (
		<>
			<Reveal delay={0.1}>
				<h1>Hola! soy Martín.</h1>
			</Reveal>
			<Reveal delay={0.2}>
				<h2>Desarrollador Full Stack</h2>
			</Reveal>
			<Reveal delay={0.3}>
				<p>who am i</p>
			</Reveal>
			<Reveal delay={0.4}>
				<p>Iconos redes</p>
			</Reveal>
			<Reveal delay={0.5}>
				<Button text={"Contactame"} />
			</Reveal>
		</>
	)
}
