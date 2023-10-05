import "./App.css"

import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import Main from "./screens/Main/Main"
import Projects from "./screens/Projects/Projects"
import About from "./screens/About/About"

function App() {
	return (
		<>
			<Parallax pages={3}>
				<Main />
				<Projects />
				<About />
			</Parallax>
		</>
	)
}

export default App
