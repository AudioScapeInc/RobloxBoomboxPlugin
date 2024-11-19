import { createPortal, createRoot } from "@rbxts/react-roblox";
import React, { StrictMode } from "@rbxts/react";
import { App } from "./App";
import { any } from "@rbxts/react/src/prop-types";
import { ReflexProvider } from "@rbxts/react-reflex";
import { store } from "App/Stores";

const toolbar = plugin.CreateToolbar("Audioscape Boombox");
const button = toolbar.CreateButton("Boombox", "Toggle the Boombox Widget", "rbxassetid://127492159665541");

const widgetInfo = new DockWidgetPluginGuiInfo(
	Enum.InitialDockState.Float, // Widget will be initialized in floating panel
	false, // Widget will be initially enabled
	true, // Don't override the previous enabled state
	700, // Default width of the floating window
	500, // Default height of the floating window
	200, // Minimum width of the floating window (optional)
	100, // Minimum height of the floating window (optional)
	// 700, // Minimum width of the floating window (optional)
	// 500, // Minimum height of the floating window (optional)
);

const BoomboxWidget = plugin.CreateDockWidgetPluginGui("BoomboxWidget", widgetInfo);

const root = createRoot(new Instance("Folder"));
root.render(
	<StrictMode>
		{createPortal(
			<ReflexProvider producer={store}>
				<App />
			</ReflexProvider>,
			BoomboxWidget,
		)}
	</StrictMode>,
);

button.Click.Connect(() => {
	BoomboxWidget.Enabled = !BoomboxWidget.Enabled;
});
