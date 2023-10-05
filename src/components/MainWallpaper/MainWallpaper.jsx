import "./MainWallpaper.css"
import { useEffect } from "react"

export default function MainWallpaper() {
	useEffect(() => {
		for (let i = 1; i <= 7; i++) {
			const element = document.getElementById(`wallpaperLayer${i}`)
			element.style.backgroundImage = i === 7 ? `url("c${i}.jpg")` : `url("c${i}.svg")`
			element.style.filter = "brightness(0.8) saturate(0.3)"
			element.style.zIndex = 8 - i
		}
	}, [])

	return (
		<article className="mainwallpaper__container">
			<div id="wallpaperLayer1"></div>
			<div id="wallpaperLayer2"></div>
			<div id="wallpaperLayer3"></div>
			<div id="wallpaperLayer4"></div>
			<div id="wallpaperLayer5"></div>
			<div id="wallpaperLayer6"></div>
			<div id="wallpaperLayer7"></div>
		</article>
	)
}
