import "./abouteducation.css"
import { useEffect, useState } from "react"

import Reveal from "../../components/Reveal/Reveal"
import AboutEducationCard from "../AboutEducationCard/AboutEducationCard"

const coursesDone = [
	{
		year: 2022,
		month: "Enero",
		title: "Desarrollo Web",
		description:
			"Adquiridos conocimientos relacionados con la creación de sitios web estáticos, el diseño web utilizando HTML y CSS, el uso de herramientas como GIT y SASS para el desarrollo web, la aplicación de Bootstrap en proyectos, la optimización para SEO, la implementación de sitios en servidores, y la gestión de clientes, incluyendo la presentación de presupuestos.",
		institution: "Coderhouse",
		certificateURL: "https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es",
	},
	{
		year: 2022,
		month: "Febrero",
		title: "Javascript",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos en los fundamentos del lenguaje de programación más utilizado en la actualidad, con la capacidad de crear una amplia variedad de aplicaciones. Durante el curso, exploré las herramientas esenciales del lenguaje, analicé casos prácticos de aplicación y comprendí la utilidad de las librerías.",
		certificateURL: "https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es",
	},
	{
		year: 2022,
		month: "Marzo",
		title: "ReactJS",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos en la programación por componentes a través de JavaScript (JS) y ES6, además de comprender las ventajas de la utilización de flujos de datos. Durante el curso, apliqué el manejo de rutas utilizando Firebase y comprendí la utilización del virtual DOM a través de los desarrollos en React JS.",
		certificateURL: "https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es",
	},
	{
		year: 2023,
		month: "Abril",
		title: "Programación Backend",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos en el desarrollo de aplicaciones modernas utilizando Node.js y MongoDB. Programé en JavaScript en el lado del servidor, aplicando técnicas asincrónicas. Aprendí a trabajar con bases de datos NoSQL, dominando la gestión eficiente, ágil y altamente escalable de los datos.",
		certificateURL: "https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es",
	},
	{
		year: 2023,
		month: "Mayo",
		title: "Desarrollo de aplicaciones",
		institution: "Coderhouse",
		description:
			"Adquiridos conocimientos y bases para crear aplicaciones bridge con capacidad de despliegue en Android e iOS, utilizando React Native y JavaScript. Te conectaste a APIs y adquiriste habilidades para la sincronización con Firebase o Realm DB.",
		certificateURL: "https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es",
	},
]

export default function AboutEducation() {
	const [yearSelected, setYearSelected] = useState(2022)
	const [coursesToShow, setCoursesToShow] = useState([])

	useEffect(() => {
		const filteredCourses = coursesDone.filter((course) => course.year === yearSelected)
		setCoursesToShow(filteredCourses)
	}, [yearSelected])

	return (
		<div className="abouteducation__container flex-column">
			<div className="abouteducation__header flex-row">
				<Reveal>
					<h1>Estudios realizados</h1>
				</Reveal>

				<Reveal delay={0.5}>
					<ul className="abouteducation__yearSelector flex-row">
						<li className={yearSelected === 2022 ? 'active' : ''} onClick={() => setYearSelected(2022)}>
							2022
						</li>
						<p>|</p>
						<li className={yearSelected === 2023 ? 'active' : ''} onClick={() => setYearSelected(2023)}>2023</li>
					</ul>
				</Reveal>
			</div>

			<Reveal delay={0.8}>
				<h2 style={{ color: "#eeabab" }}>{yearSelected}</h2>
			</Reveal>

			<div className="abouteducation__years flex-row">
				{coursesToShow.map((course, index) => (
					<Reveal delay={index * 0.2 + 1}>
						<AboutEducationCard data={course} />
					</Reveal>
				))}
			</div>
		</div>
	)
}
