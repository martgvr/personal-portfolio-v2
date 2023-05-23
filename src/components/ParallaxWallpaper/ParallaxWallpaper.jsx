import React, { useEffect } from "react"
import "./parallaxwallpaper.css"

function ParallaxWallpaper() {
	useEffect(() => {
		for (let i = 1; i <= 7; i++) {
			const element = document.getElementById(`parallaxLayer${i}`)
			element.style.backgroundImage = i === 7 ? `url("c${i}.jpg")` : `url("c${i}.svg")`
			element.style.filter = "brightness(0.8) saturate(0.3)"
			element.style.zIndex = 8 - i
		}
	}, [])

	return (
		<article className="parallaxwallpaper__container">
			<div className="parallax__tvlines"></div>
			<div className="parallax__gradient"></div>

			<div className="parallax__layer1" id="parallaxLayer1"></div>
			<div className="parallax__layer2" id="parallaxLayer2"></div>
			<div className="parallax__layer3" id="parallaxLayer3"></div>
			<div className="parallax__layer4" id="parallaxLayer4"></div>
			<div className="parallax__layer5" id="parallaxLayer5"></div>
			<div className="parallax__layer6" id="parallaxLayer6"></div>
			<div className="parallax__layer7" id="parallaxLayer7"></div>
		</article>
	)
}

export default ParallaxWallpaper
