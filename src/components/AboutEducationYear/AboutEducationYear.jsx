import "./abouteducationyear.css"
import AboutEducationCourse from "../AboutEducationCourse/AboutEducationCourse"

export default function AboutEducationYear({ year, data }) {
	return (
		<div className="abouteducationyear__container">
			<h2>{year}</h2>

			<div className="abouteducationyear__timeline flex-row">
                {
                    data.map(course => <AboutEducationCourse data={course} />)
                }
			</div>
		</div>
	)
}
