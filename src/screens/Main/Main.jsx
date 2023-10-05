import "./Main.css"

import MainText from "../../components/MainText/MainText"
import MainWallpaper from "../../components/MainWallpaper/MainWallpaper"

export default function Main() {
	return (
		<div className="main__container">
            <MainText />
            <MainWallpaper />
		</div>
	)
}
