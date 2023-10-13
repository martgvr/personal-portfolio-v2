import './abouteducation.css'

import Reveal from "../../components/Reveal/Reveal"
import AboutEducationYear from '../AboutEducationYear/AboutEducationYear'

const coursesDone = [
    {
        year: 2022,
		month: 'Enero',
		title: 'Desarrollo Web',
		description: 'asd asd',
		institution: 'Coderhouse',
		certificateURL: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
    },
	{
        year: 2022,
		month: 'Febrero',
		title: 'Javascript',
		institution: 'Coderhouse',
		description: 'asd asd',
		certificateURL: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
    },
	{
        year: 2022,
		month: 'Marzo',
		title: 'ReactJS',
		institution: 'Coderhouse',
		description: 'asd asd',
		certificateURL: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
    },
	{
        year: 2023,
		month: 'Abril',
		title: 'Programación Backend',
		institution: 'Coderhouse',
		description: 'asd asd',
		certificateURL: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
    },
	{
        year: 2023,
		month: 'Mayo',
		title: 'Desarrollo de aplicaciones',
		institution: 'Coderhouse',
		description: 'asd asd',
		certificateURL: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
    },
]

export default function AboutEducation() {
	const uniqueYears = [...new Set(coursesDone.map(course => course.year))]

	return (
		<div className='abouteducation__container flex-column'>
			<Reveal>
				<h1>Estudios realizados</h1>
			</Reveal>

			{
				uniqueYears.map((year, index) => <Reveal slide delay={(index * 0.5) + 0.5}><AboutEducationYear year={year} data={coursesDone.filter(course => course.year === year)} /></Reveal>)
			}
		</div>
	)
}
