import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import type { InferProps } from "@rbxts/ui-labs/src/Typing/Typing";

import { Home } from "./Home";

const controls = {
	Visible: true,
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferProps<typeof controls>) => {
		const component = <Home initialCount={0} />;
		return component;
	},
};

export = story;
