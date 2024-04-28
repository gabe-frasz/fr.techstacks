import { Config } from "@remotion/cli/config";
import { enableTailwind } from "@remotion/tailwind";

// Config.setVideoImageFormat("png");
// Config.setCodec("vp8");
// Config.setPixelFormat("yuva420p");
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig((currentConfig) => {
	return enableTailwind(currentConfig);
});
