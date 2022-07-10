import {ReactElement} from "react";

interface Props {
	image?: string;
	title: string;
	text: string;
	children?: ReactElement;
}

export default function Card({image, title, text, children}: Props) {
	return (
		<div className="card w-96 bg-base-100 shadow-xl">
			{image && (
				<figure>
					<img src={image} alt={title} />
				</figure>
			)}
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p>{text}</p>
				{children && <div className="card-actions justify-end">{children}</div>}
			</div>
		</div>
	);
}
