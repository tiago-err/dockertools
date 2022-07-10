import {Link} from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar bg-base-100 absolute top-0">
			<div className="flex-1">
				<Link to="/" className="btn btn-ghost normal-case text-xl">
					Docker Tools
				</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal p-0">
					<li>
						<Link to="/docker-to-compose">Docker To Compose</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
