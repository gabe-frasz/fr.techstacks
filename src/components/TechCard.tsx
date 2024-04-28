import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";

interface TechCardProps {
	tech: keyof typeof techs;
	durationInFrames: [number, number];
}
export const TechCard = (props: TechCardProps) => {
	const tech = techs[props.tech];
	const from = props.durationInFrames[0];
	const to = props.durationInFrames[1];

	const frame = useCurrentFrame();
	const opacityStart = interpolate(frame, [from, from + 12], [0, 1]);
	const opacityEnd = interpolate(frame, [to - 12, to], [1, 0]);

	let statusColor = "";
	switch (tech.status) {
		case "done":
			statusColor = "bg-emerald-500";
			break;
		case "in progress":
			statusColor = "bg-amber-500";
			break;
		case "interested in":
			statusColor = "bg-zinc-500";
			break;
	}

	return (
		<div
			className={`relative bg-zinc-950 w-[75px] h-[75px] aspect-square p-4 rounded`}
			style={{ opacity: frame > from + 12 ? opacityEnd : opacityStart }}
		>
			<span
				className={`absolute top-1 left-1 w-1 h-1 rounded-full ${statusColor}`}
			/>

			<Img
				src={staticFile(tech.image)}
				className="w-full h-full object-contain"
			/>
		</div>
	);
};

const techs = {
	astro: {
		image: "astro-icon-light-gradient.png",
		status: "done",
	},
	bun: {
		image: "bun.svg",
		status: "done",
	},
	cplusplus: {
		image: "cplusplus.svg",
		status: "interested in",
	},
	csharp: {
		image: "csharp.svg",
		status: "interested in",
	},
	cypress: {
		image: "cypress.svg",
		status: "done",
	},
	docker: {
		image: "docker.svg",
		status: "done",
	},
	expo: {
		image: "expo.png",
		status: "interested in",
	},
	gleam: {
		image: "gleam.svg",
		status: "interested in",
	},
	go: {
		image: "go.svg",
		status: "done",
	},
	nextjs: {
		image: "nextjs.svg",
		status: "done",
	},
	nodejs: {
		image: "nodejs.svg",
		status: "done",
	},
	postgres: {
		image: "postgres.svg",
		status: "in progress",
	},
	react: {
		image: "react.svg",
		status: "done",
	},
	rust: {
		image: "rust.svg",
		status: "in progress",
	},
	tailwindcss: {
		image: "tailwindcss.svg",
		status: "done",
	},
	typescript: {
		image: "typescript.png",
		status: "done",
	},
	vitest: {
		image: "vitest.svg",
		status: "done",
	},
	zig: {
		image: "zig.svg",
		status: "interested in",
	},
} satisfies {
	[key: string]: {
		image: string;
		status: "done" | "in progress" | "interested in";
	};
};
