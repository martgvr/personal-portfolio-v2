import "./abouteducationcourse.css"
import Button from "../Button/Button"

export default function AboutEducationCourse({ data }) {
    const { title, institution, certificateLink, left, circleColor } = data

	return (
		<div className="abouteducationcourse flex-column" style={{ left: left }}>
			<div className="abouteducationcourse__circle flex-row" style={{ backgroundColor: circleColor }}>
				<div className="abouteducationcourse__innercircle" />
			</div>

			<h4>{title}</h4>
			<h5>{institution}</h5>

			<Button text={'Ver certificado'} link={certificateLink} />
		</div>
	)
}
