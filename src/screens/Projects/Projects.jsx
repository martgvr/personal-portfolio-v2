import "./Projects.css"

import Reveal from "../../components/Reveal/Reveal"
import ProjectsCard from "../../components/ProjectsAcademic/ProjectsCard"
import { useState } from "react"

const projects = [
	{
		title: "Boost",
		description: "Emprendimiento dedicado a los servicios de asistencia a otros emprendedores.",
		tech: ["Node", "JS"],
		photo: "https://i.ibb.co/FYrQCbL/boost.jpg",
		category: "professional",
		repoURL: "http://",
		deployURL: "http://",
	},
	{
		title: "Trigorinas",
		description: "Emprendimiento familiar dedicado a los servicios de panadería en la zona oeste de Buenos Aires",
		tech: ["Node", "JS"],
		photo: "https://i.ibb.co/Z6h0CkL/trigorinas.png",
		category: "professional",
		repoURL: "http://",
		deployURL: "http://",
	},
	{
		title: "New Kaam's Style",
		description: "Emprendimiento dedicado a la venta de indumentaria en la ciudad de Córdoba.",
		tech: ["Node", "JS"],
		photo: "https://i.ibb.co/9NV8BTB/nks.jpg",
		category: "professional",
		repoURL: "http://",
		deployURL: "http://",
	},
]

export default function Projects() {
	const [delayCounter, setDelayCounter] = useState(0.05)

	return (
		<article className="projects__container">
			<div className="projects__content flex-column">
				<Reveal>
					<h1>Galería de proyectos</h1>
				</Reveal>

				<ul className="projects__navbar flex-row">
					<Reveal slide delay={0.4}>
						<li className="active">Profesionales</li>
					</Reveal>
					<Reveal slide delay={0.1}>
						<li>Académicos</li>
					</Reveal>
				</ul>

				<div className="projects__cards flex-row">
					{projects.map((project, index) => (
						<ProjectsCard project={project} delay={delayCounter + (index * 0.2)} key={index} />
					))}
				</div>
			</div>
		</article>
	)
}
