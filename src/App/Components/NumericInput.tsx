import React from "@rbxts/react";
import { Theme } from "App/Theme";

interface NumericInputProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	Value: number;
	Min: number;
	Max: number;
	Step?: number; // Added Step prop
	OnValidChanged: (value: number) => void;
	OnSubmitted?: (value: number) => void; // Added OnSubmitted prop
	Arrows?: boolean;
	Slider?: boolean; // Added Slider prop
	Disabled?: boolean;
}

export default function NumericInput({
	AnchorPoint,
	Position,
	Size,
	Value,
	Min,
	Max,
	Step = 1, // Default step to 1
	OnValidChanged,
	OnSubmitted,
	Arrows = true,
	Slider = false, // Default slider to false
	Disabled = false,
}: NumericInputProps): React.ReactElement {
	const [inputValue, setInputValue] = React.useState(tostring(Value));

	const handleInputChange = (newValue: string) => {
		setInputValue(newValue);
		const numValue = tonumber(newValue);
		if (numValue !== undefined && numValue >= Min && numValue <= Max && (numValue % Step === 0 || Step % 1 !== 0)) {
			OnValidChanged(numValue);
		}
	};

	const increment = () => {
		if (!Disabled) {
			const newValue = math.min(Value + Step, Max);
			setInputValue(tostring(newValue));
			OnValidChanged(newValue);
		}
	};

	const decrement = () => {
		if (!Disabled) {
			const newValue = math.max(Value - Step, Min);
			setInputValue(tostring(newValue));
			OnValidChanged(newValue);
		}
	};

	return (
		<frame AnchorPoint={AnchorPoint} Position={Position} Size={Size} BackgroundTransparency={1}>
			<textbox
				Text={inputValue}
				TextColor3={Theme.Colors.Text}
				BackgroundColor3={Theme.Colors.Foreground}
				Size={Arrows ? new UDim2(1, -20, 1, 0) : new UDim2(1, 0, 1, 0)}
				ClearTextOnFocus={false}
				TextEditable={!Disabled}
				Change={{
					Text: (rbx) => handleInputChange(rbx.Text),
				}}
			/>
			{Arrows && (
				<frame Size={new UDim2(0, 20, 1, 0)} Position={new UDim2(1, -20, 0, 0)} BackgroundTransparency={1}>
					<textbutton
						Text="▲"
						Size={new UDim2(1, 0, 0.5, 0)}
						BackgroundColor3={Theme.Colors.Foreground}
						TextColor3={Theme.Colors.Text}
						Event={{
							MouseButton1Click: increment,
						}}
					/>
					<textbutton
						Text="▼"
						Size={new UDim2(1, 0, 0.5, 0)}
						Position={new UDim2(0, 0, 0.5, 0)}
						BackgroundColor3={Theme.Colors.Foreground}
						TextColor3={Theme.Colors.Text}
						Event={{
							MouseButton1Click: decrement,
						}}
					/>
				</frame>
			)}
			{/* {Slider && (
				<Slider
					AnchorPoint={new Vector2(1, 0)}
					Position={new UDim2(1, 0, 0, 0)}
					Size={new UDim2(1, -20, 1, 0)}
					Value={Value}
					Min={Min}
					Max={Max}
					Step={Step}
					OnChanged={OnValidChanged}
					OnCompleted={OnSubmitted}
					Disabled={Disabled}
				/>
			)} */}
		</frame>
	);
}
