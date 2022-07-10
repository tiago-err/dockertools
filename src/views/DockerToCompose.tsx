import {mdiCheck} from "@mdi/js";
import Icon from "@mdi/react";
import {useEffect, useState} from "react";
import {ComposeCode} from "../components";
import {dockerToCompose} from "../utils/compose";

export default function DockerToCompose() {
	const [dockerCommand, setDockerCommand] = useState<string>("");
	const [dockerCompose, setDockerCompose] = useState<string | undefined>(undefined);
	const [toggleClipboardSuccess, setToggleClipboardSuccess] = useState(false);
	const [toggleConvertSuccess, setToggleConvertSuccess] = useState(false);

	function convertCommand() {
		const argumentSplitter = /(-{1,2}[\w\d\s=\-/:]+)/g;

		const dockerArguments = dockerCommand
			.replace(/(docker run)|(-d)|(--detached)/g, "")
			.split(argumentSplitter)
			.filter((item) => item && argumentSplitter.exec(item))
			.map((item) => item.trim());

		const dockerImage = dockerCommand.split(" ").pop() as string;
		setDockerCompose(dockerToCompose(dockerArguments, dockerImage));
	}

	useEffect(() => {
		if (toggleClipboardSuccess) {
			setTimeout(() => setToggleClipboardSuccess(false), 500);
		}
	}, [toggleClipboardSuccess]);

	useEffect(() => {
		if (toggleConvertSuccess) {
			setTimeout(() => setToggleConvertSuccess(false), 500);
		}
	}, [toggleConvertSuccess]);

	useEffect(() => {
		if (dockerCompose) {
			setToggleConvertSuccess(true);
		}
	}, [dockerCompose]);

	return (
		<div className="h-screen w-full flex flex-col justify-center items-center">
			<div className="grid grid-cols-1 grid-rows-2 w-1/2 place-items-center space-y-8">
				<input
					type="text"
					placeholder="docker run ..."
					onChange={(e) => setDockerCommand(e.target.value)}
					className="input w-full max-w-sm"
				/>
				{dockerCompose && (
					<div className="grid grid-cols-2 gap-x-8 col-span-8">
						<button className={`btn ${toggleConvertSuccess ? "btn-success" : ""}`} onClick={convertCommand}>
							{toggleConvertSuccess ? <Icon path={mdiCheck} size={1} color="white" /> : "Convert"}
						</button>
						<button
							className={`btn w-48 ${toggleClipboardSuccess ? "btn-success" : ""}`}
							onClick={() => {
								navigator.clipboard.writeText(dockerCompose);
								setToggleClipboardSuccess(true);
							}}>
							{toggleClipboardSuccess ? <Icon path={mdiCheck} size={1} color="white" /> : "Copy to clipboard"}
						</button>
					</div>
				)}
				{!dockerCompose && (
					<button className="btn" onClick={convertCommand}>
						Convert
					</button>
				)}
				{dockerCompose && <ComposeCode dockerCompose={dockerCompose} />}
			</div>
		</div>
	);
}
