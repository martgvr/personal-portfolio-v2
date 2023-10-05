import "./MainWallpaper.css"
import { useEffect } from "react"
import { ParallaxLayer } from "@react-spring/parallax"

export default function MainWallpaper() {
	useEffect(() => {
		for (let i = 1; i <= 7; i++) {
			const element = document.getElementById(`wallpaperLayer${i}`)
			element.style.zIndex = 8 - i
			element.style.backgroundImage = i === 7 ? `url("c${i}.jpg")` : `url("c${i}.svg")`
		}
	}, [])

	return (
		<article className="mainwallpaper__container" id="mainWallpaperContainer">
			<div id="wallpaperLayer1" offset={0} speed={0}></div>
			<div id="wallpaperLayer2" offset={0} speed={0}></div>
			<div id="wallpaperLayer3" offset={0} speed={0}></div>
			<div id="wallpaperLayer4" offset={0} speed={0}></div>
			<ParallaxLayer id="wallpaperLayer5" offset={0} speed={0.2}></ParallaxLayer>
			<ParallaxLayer id="wallpaperLayer6" offset={0} speed={0.3}></ParallaxLayer>
			<ParallaxLayer id="wallpaperLayer7" offset={0} speed={0.5}></ParallaxLayer>
		</article>
	)
}
