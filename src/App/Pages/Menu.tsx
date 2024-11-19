//!optimize 2

import { useMountEffect, useUnmountEffect } from "@rbxts/pretty-react-hooks";
import React, { useRef } from "@rbxts/react";
import Color3Input from "App/Components/ConfigMenu/InputElements/Color3Input";
import SettingContainer from "App/Components/ConfigMenu/SettingContainer";
import { useRootProducer } from "App/Hooks";

export default function Menu({ children }: React.PropsWithChildren): React.Element {
	const frameRef = useRef<Frame>();
	const producer = useRootProducer();

	useMountEffect(() => {
		const frame = frameRef.current;
		if (!frame) return;

		producer.setStoryFrame(frame.Parent ? (frame.Parent as Frame) : frame);
	});
	// useUnmountEffect(() => {
	// 	print("Unmounting");
	// });
	return (
		<frame ref={frameRef} Size={new UDim2(1, 0, 1, 0)} BackgroundTransparency={1}>
			<uilistlayout FillDirection={Enum.FillDirection.Vertical} />
			<SettingContainer valueLabel="Autoplay" initialValue={true} valueChanged={(newValue) => {}} />
			<SettingContainer
				valueLabel="Accent Color"
				initialValue={Color3.fromRGB(255, 255, 255)}
				valueChanged={(newValue) => {}}
			/>
			<SettingContainer
				valueLabel="Dock Position"
				initialValue={new Vector2(1, 0.5)}
				valueChanged={(newValue) => {}}
			/>
			<SettingContainer valueLabel="Dragging Enabled" initialValue={true} valueChanged={(newValue) => {}} />
			<SettingContainer valueLabel="Max Volume" initialValue={1} valueChanged={(newValue) => {}} />
			<SettingContainer valueLabel="Minimized" initialValue={false} valueChanged={(newValue) => {}} />
			<SettingContainer valueLabel="Search Enabled" initialValue={false} valueChanged={(newValue) => {}} />
		</frame>
	);
}
