import './parallax.css'
import React from "react"

import ParallaxBox from "../ParallaxBox/ParallaxBox"
import ParallaxText from "../ParallaxText/ParallaxText"
import ParallaxWallpaper from "../ParallaxWallpaper/ParallaxWallpaper"

function Parallax() {
	return (
		<div className="parallax__container">
			<ParallaxBox />
			<ParallaxWallpaper />
            <ParallaxText />
		</div>
	)
}

export default Parallax
