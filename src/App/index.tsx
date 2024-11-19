import React, { useEffect } from "@rbxts/react";
import { Home } from "./Pages/Home";
import { useRootProducer, useRootSelector } from "./Hooks";
import { ServerScriptService } from "@rbxts/services";

export function App() {
	const producer = useRootProducer();
	const attributeSlice = useRootSelector((state) => state.attribute);
	const AudioscapeBoomBox = ServerScriptService.FindFirstChild("AudioscapeBoomBox") as AudioscapeBoombox | undefined;

	useEffect(() => {
		if (!AudioscapeBoomBox) {
			return;
		}

		producer.setAutoPlay(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("AutoPlay") as boolean) || attributeSlice.AutoPlay,
		);
		producer.setDefaultAccentColor(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("DefaultAccentColor") as Color3) ||
				attributeSlice.DefaultAccentColor,
		);
		producer.setDefaultPosition(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("DefaultPosition") as Vector2) ||
				attributeSlice.DefaultPosition,
		);
		producer.setDraggingEnabled(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("DraggingEnabled") as boolean) ||
				attributeSlice.DraggingEnabled,
		);
		producer.setMaxVolume(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("MaxVolume") as number) || attributeSlice.MaxVolume,
		);
		producer.setMinimized(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("Minimized") as boolean) || attributeSlice.Minimized,
		);
		producer.setSearchEnabled(
			(AudioscapeBoomBox.AttributeConfiguration.GetAttribute("SearchEnabled") as boolean) ||
				attributeSlice.SearchEnabled,
		);
	}, [AudioscapeBoomBox]);

	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<Home buttonText="Add The AudioScape.ai Boombox" />
		</frame>
	);
}
