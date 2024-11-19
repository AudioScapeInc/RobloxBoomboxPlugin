//!optimize 2

import React from "@rbxts/react";
import { useRootSelector } from "App/Hooks";
import { Theme } from "App/Theme";
import ColorPickerVisual from "./ColorPickerVisual";

export default function ColorPicker({ children }: React.PropsWithChildren): React.Element {
	const showColorPicker = useRootSelector((state) => state.plugin.ShowColorPicker);
	return (
		<frame
			Size={new UDim2(1, 0, 1, 0)}
			BackgroundColor3={Theme.Colors.Background}
			BackgroundTransparency={0.75}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			ZIndex={2}
			Visible={showColorPicker}
		>
			<frame
				Size={new UDim2(0, 200, 0, 200)}
				BackgroundColor3={Theme.Colors.Foreground}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				ZIndex={-1}
				Visible={showColorPicker}
			>
				<uicorner CornerRadius={new UDim(0, 2)} />
				<uiaspectratioconstraint AspectRatio={1} />
				<ColorPickerVisual Size={new UDim2(1, 0, 1, 0)} Color={Color3.fromRGB(255, 255, 255)} />
			</frame>
		</frame>
	);
}
