import {Routes, Route} from "react-router-dom";
import {Footer} from "./components";
import {Home, DockerToCompose} from "./views";

function App() {
	return (
		<div className="w-full h-screen relative  dark:bg-gray-600 bg-gray-200">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="docker-to-compose" element={<DockerToCompose />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
