import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

export default function ComposeCode({dockerCompose}: {dockerCompose: string}) {
	const [lines] = useState(dockerCompose.split("\n"));

	function formatLine(line: string) {
		return line
			.replace("\n", "")
			.split(":")
			.map((item, index) => (
				<code className={index === 0 ? "text-info" : ""}>
					{item}
					{index === 0 ? ":" : ""}
				</code>
			));
	}

	return (
		<AnimatePresence>
			<motion.div className="mockup-code" initial={{scale: 0.3}} animate={{scale: 1}}>
				{lines.map((line) => (
					<pre>{line.trim().startsWith("-") || line.length === 0 ? <code>{line.replace("\n", "")}</code> : formatLine(line)}</pre>
				))}
			</motion.div>
		</AnimatePresence>
	);
}
