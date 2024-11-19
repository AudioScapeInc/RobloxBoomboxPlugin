//!optimize 2

import React, { useEffect } from "@rbxts/react";
import { Theme } from "App/Theme";

interface Vector2InputProps extends React.PropsWithChildren {
	value: number;
	bounds?: number;
}

export default function NumberInput({ children, value, bounds }: Vector2InputProps): React.Element {
	const [input, setInput] = React.useState(math.clamp(value, 0, bounds !== undefined ? bounds : 10));
	const [inputText, setInputText] = React.useState(tostring(input));

	useEffect(() => {
		setInputText(tostring(input));
	}, [input]);

	return (
		<frame Size={new UDim2(0.95, 0, 0.7, 0)} BackgroundTransparency={1} BorderSizePixel={0}>
			<uicorner CornerRadius={new UDim(0, 2)} />
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalAlignment={Enum.HorizontalAlignment.Left}
			/>
			<textbox
				TextColor3={Theme.Colors.Text}
				BackgroundColor3={Theme.Colors.Foreground}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0, 20, 1, 0)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={0}
				Text={inputText}
				Event={{
					FocusLost: (e) => {
						const text = e.Text;
						const num = tonumber(text);
						if (num !== undefined) {
							setInput(math.clamp(num, 0, bounds !== undefined ? bounds : 10));
						}
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0, 2)} />
			</textbox>
		</frame>
	);
}
