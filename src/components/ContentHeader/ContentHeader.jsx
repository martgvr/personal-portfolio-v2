import React from "react"
import "./contentheader.css"

function ContentHeader() {
	return (
		<div className="contentheader__container flex-row" id="contentHeader">
			<div className="header__logo flex-row">
				<p>MARTÍN GUEVARA</p>
				<p class="header__logo--divider">|</p>
				<p>FULL STACK DEVELOPER</p>
			</div>

			<div class="header__networks flex-row">
				<img src="bracket.png" alt="" class="header__networks--bracket" />

				<a href="https://github.com/martgvr" class="flex-row">
					<p>Github:</p>
					<img src="github.png" alt="" />
					<p>,</p>
				</a>

				<a href="https://github.com/martgvr" class="flex-row">
					<p>LinkedIn:</p>
					<img src="linkedin.png" alt="" />
				</a>

				<img src="bracket.png" alt="" class="header__networks--bracket" />
			</div>
		</div>
	)
}

export default ContentHeader
