import { AbsoluteFill, Series } from "remotion";

import { StatusLegend } from "./components/StatusLegend";
import { TechCard } from "./components/TechCard";

export const TechStack = () => {
	return (
		<AbsoluteFill className="p-6 justify-center">
			<div className="flex justify-between gap-3 flex-wrap">
				<Series>
					<Series.Sequence durationInFrames={165} layout="none">
						<TechCard tech="bun" durationInFrames={[0, 165]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={135} layout="none">
						<TechCard tech="nodejs" durationInFrames={[0, 135]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={135} layout="none">
						<TechCard tech="typescript" durationInFrames={[-15, 135]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={140} layout="none">
						<TechCard tech="gleam" durationInFrames={[0, 140]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={120} layout="none">
						<TechCard tech="typescript" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={75} layout="none">
						<TechCard tech="tailwindcss" durationInFrames={[-15, 75]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={135} layout="none">
						<TechCard tech="cplusplus" durationInFrames={[0, 135]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={90} layout="none">
						<TechCard tech="tailwindcss" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={140} layout="none">
						<TechCard tech="react" durationInFrames={[-15, 140]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={80} layout="none">
						<TechCard tech="expo" durationInFrames={[0, 80]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={80} layout="none">
						<TechCard tech="react" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={30} layout="none">
						<TechCard tech="csharp" durationInFrames={[-15, 30]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={185} layout="none">
						<TechCard tech="nextjs" durationInFrames={[0, 185]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={85} layout="none">
						<TechCard tech="csharp" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={150} layout="none">
						<TechCard tech="astro" durationInFrames={[-5, 150]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={140} layout="none">
						<TechCard tech="go" durationInFrames={[0, 140]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={10} layout="none">
						<TechCard tech="astro" durationInFrames={[0, 15]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={120} layout="none">
						<TechCard tech="go" durationInFrames={[0, 120]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={180} layout="none">
						<TechCard tech="rust" durationInFrames={[0, 180]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={150} layout="none">
						<TechCard tech="postgres" durationInFrames={[-15, 150]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={60} layout="none">
						<TechCard tech="react" durationInFrames={[0, 60]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={90} layout="none">
						<TechCard tech="postgres" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={155} layout="none">
						<TechCard tech="vitest" durationInFrames={[-15, 155]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={125} layout="none">
						<TechCard tech="cypress" durationInFrames={[0, 125]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={20} layout="none">
						<TechCard tech="vitest" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
				<Series>
					<Series.Sequence durationInFrames={100} layout="none">
						<TechCard tech="docker" durationInFrames={[-15, 100]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={120} layout="none">
						<TechCard tech="zig" durationInFrames={[0, 110]} />
					</Series.Sequence>
					<Series.Sequence durationInFrames={80} layout="none">
						<TechCard tech="docker" durationInFrames={[0, 300]} />
					</Series.Sequence>
				</Series>
			</div>

			<StatusLegend />
		</AbsoluteFill>
	);
};
