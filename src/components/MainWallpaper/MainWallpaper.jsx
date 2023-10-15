import "./MainWallpaper.css"
import { useEffect, useState } from "react"
import { useMotionValueEvent, useScroll } from "framer-motion"

export default function MainWallpaper() {
	const { scrollY } = useScroll()
	const [scrollPosition, setScrollPosition] = useState(scrollY)

	useMotionValueEvent(scrollY, "change", (latest) => setScrollPosition(latest))

	useEffect(() => {
		for (let i = 1; i <= 7; i++) {
			const element = document.getElementById(`wallpaperLayer${i}`)
			element.style.zIndex = 8 - i
			element.style.backgroundImage = i === 7 ? `url("c${i}.jpg")` : `url("c${i}.svg")`
		}
	}, [])

	return (
		<article className="mainwallpaper__container" id="mainWallpaperContainer">
			<div id="wallpaperLayer1"></div>
			<div id="wallpaperLayer2"></div>
			<div id="wallpaperLayer3"></div>
			<div id="wallpaperLayer4"></div>

			<div id="wallpaperLayer5" style={{ top: scrollPosition * (-0.1) }}></div>
			<div id="wallpaperLayer6" style={{ top: scrollPosition * (-0.1) }}></div>
			<div id="wallpaperLayer7" style={{ top: scrollPosition * (-0.3) }}></div>

			<img src="scroll.png" alt="" style={{ opacity: 0.7 - (scrollPosition * 0.0015) }} />
		</article>
	)
}
