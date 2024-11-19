import React from "@rbxts/react";
import { Theme } from "App/Theme";
import TextInput from "./InputElements/TextInput";
import Vector2Input from "./InputElements/Vector2Input";
import Color3Input from "./InputElements/Color3Input";
import NumberInput from "./InputElements/NumberInput";
import BooleanInput from "./InputElements/BooleanInput";

interface SettingContainerProps<T> extends React.PropsWithChildren {
	valueLabel: string;
	initialValue: T;

	bounds?: Vector2;
	min?: number;
	max?: number;

	valueChanged: (value: T) => void;
}

export default function SettingContainer<T>({
	children,
	valueLabel,
	initialValue,
	bounds,
	min,
	max,
}: SettingContainerProps<T>): React.Element {
	return (
		<frame
			BackgroundColor3={Theme.Colors.Background}
			AnchorPoint={new Vector2(0.5, 0.5)}
			Size={new UDim2(1, 0, 0, 25)}
			Position={new UDim2(0.5, 0, 0.5, 0)}
			BorderColor3={Theme.Colors.Foreground}
		>
			<uilistlayout
				FillDirection={Enum.FillDirection.Horizontal}
				HorizontalAlignment={Enum.HorizontalAlignment.Center}
				VerticalAlignment={Enum.VerticalAlignment.Center}
				HorizontalFlex={"Fill"}
			/>
			<textlabel
				Text={valueLabel}
				BackgroundTransparency={1}
				TextColor3={Theme.Colors.Text}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0.5, 0, 0, 25)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={0}
			/>

			<frame
				BackgroundColor3={Theme.Colors.Primary}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0, 1, 0, 25)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={1}
			/>

			<frame
				BackgroundTransparency={1}
				AnchorPoint={new Vector2(0.5, 0.5)}
				Size={new UDim2(0.5, 0, 0, 25)}
				Position={new UDim2(0.5, 0, 0.5, 0)}
				LayoutOrder={2}
			>
				<uilistlayout
					FillDirection={Enum.FillDirection.Horizontal}
					HorizontalAlignment={Enum.HorizontalAlignment.Center}
					VerticalAlignment={Enum.VerticalAlignment.Center}
				/>
				{typeIs(initialValue, "string") ? <TextInput value={initialValue} /> : undefined}
				{typeIs(initialValue, "Color3") ? <Color3Input value={initialValue} /> : undefined}
				{typeIs(initialValue, "boolean") ? <BooleanInput value={initialValue} /> : undefined}
				{typeIs(initialValue, "number") ? <NumberInput value={initialValue} bounds={max} /> : undefined}
				{typeIs(initialValue, "Vector2") ? <Vector2Input value={initialValue} bounds={bounds} /> : undefined}
			</frame>
		</frame>
	);
}
