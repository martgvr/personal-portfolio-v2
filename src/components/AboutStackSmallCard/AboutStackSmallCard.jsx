import "./aboutstacksmallcard.css"

export default function AboutStackSmallCard({ name, icon }) {
	return (
		<div className="aboutstacksmallcard__container flex-row">
			<img src={icon} alt="" />
			<p>{name}</p>
		</div>
	)
}
