import { Composition, registerRoot } from "remotion";
import { TechStack } from "./TechStack";
import "./style.css";

const RemotionRoot = () => (
	<Composition
		id="TechStack"
		component={TechStack}
		durationInFrames={300}
		fps={30}
		width={480}
		height={270}
	/>
);

registerRoot(RemotionRoot);
