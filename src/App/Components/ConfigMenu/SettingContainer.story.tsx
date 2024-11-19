import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import type { InferProps } from "@rbxts/ui-labs/src/Typing/Typing";
import SettingContainer from "./SettingContainer";

const controls = {
	Visible: true,
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferProps<typeof controls>) => {
		const component = (
			<SettingContainer
				valueLabel="Test"
				initialValue={true}
				bounds={new Vector2(1, 1)}
				valueChanged={(newValue) => {}}
			/>
		);
		return component;
	},
};

export = story;
