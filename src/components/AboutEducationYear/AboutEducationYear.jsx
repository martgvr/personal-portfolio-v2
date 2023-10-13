import "./abouteducationyear.css"

import AboutEducationCard from "../AboutEducationCard/AboutEducationCard"

export default function AboutEducationYear({ year, data }) {
	return (
		<div className="abouteducationyear__container">
			<h2>{year}</h2>

			<div className="abouteducationyear__timeline flex-row">
                {
                    data.map(course => <AboutEducationCard data={course} />)
                }
			</div>
		</div>
	)
}
