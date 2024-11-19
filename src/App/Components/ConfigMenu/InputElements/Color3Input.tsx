//!optimize 2

import React, { useRef } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Primitive } from "@rbxts/ui-labs";
import { storyContainerRef } from "App/Context";
import { useRootProducer, useRootSelector } from "App/Hooks";
import { Theme } from "App/Theme";

interface Color3InputProps extends React.PropsWithChildren {
	value: Color3;
}

function convertTo255(value: number): number {
	return math.clamp(math.floor(value * 255), 0, 255);
}

export default function Color3Input({ children, value }: Color3InputProps): React.Element {
	const producer = useRootProducer();
	const showColorPicker = useRootSelector((state) => state.plugin.ShowColorPicker);

	return (
		<frame
			Size={new UDim2(0.95, 0, 0.7, 0)}
			BackgroundColor3={Theme.Colors.Foreground}
			BackgroundTransparency={1}
			BorderSizePixel={0}
		>
			<uicorner CornerRadius={new UDim(0, 2)} />
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Left}
			/>
			<imagebutton
				Size={new UDim2(0.5, 0, 1, 0)}
				BackgroundColor3={value}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						// const modal = createRoot(new Instance("Folder"), ElementTest);
						// modal.render(imageButton);
						producer.setShowColorPicker(!showColorPicker);
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0, 2)} />
				<uiaspectratioconstraint />
			</imagebutton>
			<textlabel
				Text={`[${convertTo255(value.R)}, ${convertTo255(value.G)}, ${convertTo255(value.B)}]`}
				TextColor3={Theme.Colors.Text}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0, 100, 1, 0)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				TextXAlignment={Enum.TextXAlignment.Center}
				LayoutOrder={2}
			/>
		</frame>
	);
}
