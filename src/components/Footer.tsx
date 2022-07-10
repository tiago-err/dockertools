import {mdiGithub, mdiLinkedin} from "@mdi/js";
import Icon from "@mdi/react";

export default function Footer() {
	return (
		<footer className="footer items-center p-4 bg-neutral text-neutral-content absolute bottom-0">
			<div className="items-center grid-flow-col">
				<div className="avatar mr-2">
					<div className="w-8 rounded-full">
						<img src="https://avatars.githubusercontent.com/u/49376316?v=4" alt="Tiago Ribeiro's Profile" />
					</div>
				</div>
				<p>
					Developed by Tiago Ribeiro - <a href="https://github.com/tiago-err">Source Code</a>
				</p>
			</div>
			<div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
				<a href="https://github.com/tiago-err">
					<Icon path={mdiGithub} color="#A5ADBA" size={1} />
				</a>
				<a href="https://www.linkedin.com/in/tiago-err/">
					<Icon path={mdiLinkedin} color="#A5ADBA" size={1} />
				</a>
			</div>
		</footer>
	);
}
