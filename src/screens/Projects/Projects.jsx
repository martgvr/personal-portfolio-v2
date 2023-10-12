import "./projects.css"

import Reveal from "../../components/Reveal/Reveal"
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard"
import { useEffect, useState } from "react"

const projects = [
	{
		title: "Boost",
		description: "Emprendimiento dedicado a los servicios de asistencia a otros emprendedores.",
		tech: ["HTML", "CSS", "JS"],
		photo: "https://i.ibb.co/FYrQCbL/boost.jpg",
		category: "professional",
		repoURL: "https://github.com/martgvr/boost-cdh",
		deployURL: "https://boostcdh.netlify.app/",
	},
	{
		title: "Trigorinas",
		description: "Emprendimiento familiar dedicado a los servicios de panadería en la zona oeste de Buenos Aires",
		tech: ["HTML", "CSS", "JS"],
		photo: "https://i.ibb.co/Z6h0CkL/trigorinas.png",
		category: "professional",
		repoURL: "https://github.com/martgvr/trigorinas",
		deployURL: "https://trigorinas.netlify.app/",
	},
	{
		title: "New Kaam's Style",
		description: "Emprendimiento dedicado a la venta de indumentaria en la ciudad de Córdoba.",
		tech: ["HTML", "CSS", "JS", "Firebase"],
		photo: "https://i.ibb.co/9NV8BTB/nks.jpg",
		category: "professional",
		repoURL: "https://github.com/martgvr/new-kaams",
		deployURL: "https://newkaams.netlify.app/",
	},
	{
		title: "Barbell Weights Calculator",
		description: "Calculadora de peso total en barras de gimnasio. Proximamente publicado en PlayStore.",
		tech: ["React Native"],
		photo: "https://i.ibb.co/N9Cq6d1/barbell.jpg",
		category: "academic",
		repoURL: "https://github.com/martgvr/barbell_calculator",
	},
	{
		title: "Rummy Online",
		description: "Juego de fichas online con websockets. Proyecto dividido en front y back, desarrollado con React y Node.",
		tech: ["Node", "React"],
		photo: "https://i.ibb.co/m94vVCF/rummy.jpg",
		category: "academic",
		repoURL: "https://github.com/martgvr/rummy_online",
	},
]

export default function Projects() {
	const [delayCounter, setDelayCounter] = useState(0.05)
	const [projectsToShow, setProjectsToShow] = useState([])
	const [categorySelected, setCategorySelected] = useState("professional")

	useEffect(() => {
		const projectsFound = projects.filter((project) => project.category === categorySelected)
		setProjectsToShow(projectsFound)
	}, [categorySelected])

	return (
		<article className="projects__container">
			<div className="projects__content flex-column">
				<Reveal>
					<h1>Galería de proyectos</h1>
				</Reveal>

				<ul className="projects__navbar flex-row">
					<Reveal slide delay={0.4}>
						<li className={categorySelected == 'professional' ? 'active' : ''} onClick={() => setCategorySelected("professional")}>
							Profesionales
						</li>
					</Reveal>
					<Reveal slide delay={0.1}>
						<li className={categorySelected == 'academic' ? 'active' : ''} onClick={() => setCategorySelected("academic")}>Académicos</li>
					</Reveal>
				</ul>

				<div className="projects__cards flex-row">
					{projectsToShow.map((project, index) => (
						<ProjectsCard project={project} delay={delayCounter + index * 0.2} key={index} />
					))}
				</div>
			</div>
		</article>
	)
}
