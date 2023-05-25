import React from "react"
import "./contentterminalproject.css"

function ContentTerminalProject({ title, subtitle, description, repository, deploy }) {
	return (
		<div className="terminal__projects--box flex-column">
			<div className="projectbox__text--container flex-column">
				<h2>{title}</h2>
				<h3>{subtitle}</h3>
				<p>{description}</p>
			</div>

            <div className="projectbox__links--container flex-row">
                <div>
					<a href={repository} className="flex-row">
						Repositorio
					</a>
				</div>
				{
					deploy &&
					<div>
						<a href={deploy} className="flex-row">
							Deploy
						</a>
					</div>
				}
            </div>
		</div>
	)
}

export default ContentTerminalProject
