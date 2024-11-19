//!optimize 2

import React from "@rbxts/react";
import { ReflexProvider } from "@rbxts/react-reflex";
import ReactRoblox from "@rbxts/react-roblox";
import { CreateReactStory } from "@rbxts/ui-labs";
import { store } from "App/Stores";
import Menu from "./Menu";
import ColorPicker from "App/Components/Modals/ColorPicker";

function MenuStory(): React.Element {
	// store.
	return (
		<ReflexProvider producer={store}>
			<frame key={"Container"} Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
				<Menu />
				<ColorPicker />
			</frame>
		</ReflexProvider>
	);
}

export = CreateReactStory(
	{
		name: "MenuStory.story",
		react: React,
		reactRoblox: ReactRoblox,
		summary: `MenuStory ${"story"}.`,
	},
	() => <MenuStory />,
);
