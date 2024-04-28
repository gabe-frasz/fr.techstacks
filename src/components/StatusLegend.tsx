export const StatusLegend = () => {
	return (
		<div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-2 px-1 bg-zinc-950 text-zinc-300 text-[8px] rounded-full">
			<span>
				<span className="inline-block w-1 h-1 mr-px rounded-full bg-emerald-500" />{" "}
				Have some experience
			</span>
			<span>
				<span className="inline-block w-1 h-1 mr-px rounded-full bg-amber-500" />{" "}
				In progress
			</span>
			<span>
				<span className="inline-block w-1 h-1 mr-px rounded-full bg-zinc-500" />{" "}
				Interested in
			</span>
		</div>
	);
};
