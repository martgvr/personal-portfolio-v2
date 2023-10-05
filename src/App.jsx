import "./App.css"

import Main from "./screens/Main/Main"
import About from "./screens/About/About"
import Projects from "./screens/Projects/Projects"

import { useMotionValueEvent, useScroll } from "framer-motion"

function App() {
	const { scrollY } = useScroll()

	useMotionValueEvent(scrollY, "change", (latest) => {
		console.log("Page scroll: ", latest)
	})

	return (
		<>
			<Main />
			<About />
			<Projects />
		</>
	)
}

export default App
