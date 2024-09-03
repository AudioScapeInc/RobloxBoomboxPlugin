import React from "@rbxts/react";
import { Home } from "./Pages/Home";

export function App() {
	return (
		<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={1}>
			<Home initialCount={1} />
		</frame>
	);
}
