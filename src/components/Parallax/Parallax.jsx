import React from "react"
import ParallaxText from "../ParallaxText/ParallaxText"
import ParallaxWallpaper from "../ParallaxWallpaper/ParallaxWallpaper"
import ParallaxBox from "../ParallaxBox/ParallaxBox"

function Parallax() {
	return (
		<>
			<ParallaxBox />
			<ParallaxWallpaper />
            <ParallaxText />
		</>
	)
}

export default Parallax
