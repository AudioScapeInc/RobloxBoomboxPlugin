//!optimize 2

import React from "@rbxts/react";
import { Theme } from "App/Theme";

interface TextInputProps extends React.PropsWithChildren {
	value: string;
}

export default function TextInput({ children, value }: TextInputProps): React.Element {
	return (
		<frame Size={new UDim2(0.98, 0, 0.7, 0)} BackgroundColor3={Theme.Colors.Foreground} BorderSizePixel={0}>
			<uicorner CornerRadius={new UDim(0, 2)} />

			<textbox
				Text={value}
				TextColor3={Theme.Colors.Text}
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0.5, 0, 0, 25)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				TextXAlignment={Enum.TextXAlignment.Center}
				LayoutOrder={2}
			/>
		</frame>
	);
}
