import "./ProjectsCard.css"
import { useState } from "react"

import Reveal from "../Reveal/Reveal"

export default function ProjectsCard({ project, delay }) {
	const [showContent, setShowContent] = useState(true)
	const { title, description, tech, photo } = project

    const handleHover = () => setShowContent(!showContent)

	return (
		<Reveal slide delay={delay}>
			<div className="projectsCard" style={{ backgroundImage: `url(${photo})` }} onMouseEnter={handleHover} onMouseLeave={handleHover}>
				{showContent && (
						<div className="projectsCard__content flex-column">
							<div className="projectsCard__upper">
								<h2>{title}</h2>
								<p>{description}</p>
							</div>

							<div className="projectsCard__middle">
								<p>{tech}</p>
							</div>

							<div className="projectsCard__lower flex-row">
								<p>Repositorio</p>
								<p>Deploy</p>
							</div>
						</div>
				)}
			</div>
		</Reveal>
	)
}
