//!optimize 2

import React, { useEffect } from "@rbxts/react";
import { Theme } from "App/Theme";

interface Vector2InputProps extends React.PropsWithChildren {
	value: Vector2;
	bounds?: Vector2;
}

export default function Vector2Input({ children, value, bounds }: Vector2InputProps): React.Element {
	const [x, setX] = React.useState(math.clamp(value.X, 0, bounds ? bounds.X : 10));
	const [y, setY] = React.useState(math.clamp(value.Y, 0, bounds ? bounds.Y : 10));
	const [xText, setXText] = React.useState(tostring(x));
	const [yText, setYText] = React.useState(tostring(y));

	useEffect(() => {
		setXText(tostring(x));
		setYText(tostring(y));
	}, [x, y]);

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
				Text={xText}
				Event={{
					FocusLost: (e) => {
						const text = e.Text;
						const num = tonumber(text);
						if (num !== undefined) {
							print(num, bounds ? bounds.X : 10);
							setX(math.clamp(num, 0, bounds ? bounds.X : 10));
							print(x);
						}
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0, 2)} />
			</textbox>

			<textlabel
				TextColor3={Theme.Colors.Text}
				BackgroundColor3={Theme.Colors.Foreground}
				BackgroundTransparency={1}
				Text={","}
				TextScaled={true}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0, 15, 1, 0)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={1}
			/>

			<textbox
				TextColor3={Theme.Colors.Text}
				BackgroundColor3={Theme.Colors.Foreground}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0, 20, 1, 0)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={2}
				Text={yText}
				Event={{
					FocusLost: (e) => {
						const text = e.Text;
						const num = tonumber(text);
						if (num !== undefined) {
							setY(math.clamp(num, 0, bounds ? bounds.Y : 10));
						}
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0, 2)} />
			</textbox>
		</frame>
	);
}
