import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import type { InferProps } from "@rbxts/ui-labs/src/Typing/Typing";

import { SearchResultContainer } from "./SearchResultContainer";

const controls = {
	Visible: true,
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: controls,
	story: (props: InferProps<typeof controls>) => {
		const component = <SearchResultContainer initialResults={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} />;
		return component;
	},
};

export = story;
