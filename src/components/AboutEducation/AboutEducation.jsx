import './abouteducation.css'

import Reveal from "../../components/Reveal/Reveal"
import AboutEducationYear from '../AboutEducationYear/AboutEducationYear'

const coursesDone = [
    {
        year: 2022,
		title: 'Desarrollo Web',
		institution: 'Coderhouse',
		certificateLink: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
		circleColor: 'rgb(83, 182, 83)',
    },
	{
        year: 2022,
		title: 'Javascript',
		institution: 'Coderhouse',
		certificateLink: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
		circleColor: 'rgb(183, 182, 83)',
    },
	{
        year: 2022,
		title: 'ReactJS',
		institution: 'Coderhouse',
		certificateLink: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
		circleColor: '#63c4d6',
    },
	{
        year: 2023,
		title: 'Programación Backend',
		institution: 'Coderhouse',
		certificateLink: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
		circleColor: '#d68d63',
    },
	{
        year: 2023,
		title: 'Desarrollo de aplicaciones',
		institution: 'Coderhouse',
		certificateLink: 'https://www.coderhouse.com/certificados/627c90a75aeb790019fa8454?lang=es',
		circleColor: '#d663d4',
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
