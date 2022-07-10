import {Link} from "react-router-dom";
import {Card} from "../components";

export default function Home() {
	return (
		<div className="w-full h-full grid place-items-center grid-flow-col">
			{/* <img className="w-1/6 absolute top-28" src={process.env.PUBLIC_URL + "/assets/docker-logo.png"} alt="Docker logo" /> */}
			<Card title="Docker To Compose" text="Convert a 'docker run' command into a docker-compose file structure">
				<Link to="/docker-to-compose">
					<button className="btn">Convert</button>
				</Link>
			</Card>
			<Card title="Docker Compose Builder" text="Interactively create a docker-compose.yaml">
				<Link to="/compose-builder">
					<button className="btn">Convert</button>
				</Link>
			</Card>
		</div>
	);
}
