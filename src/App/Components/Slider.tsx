import React from "@rbxts/react";
import { useMouseDrag } from "App/Hooks/useMouseDrag";
import { useTheme } from "App/Hooks";
import { Constants } from "App/Constants";
import { Theme } from "App/Theme";

interface SliderProps {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	Value: number;
	Min: number;
	Max: number;
	Step?: number;
	LayoutOrder?: number;
	ZIndex?: number;
	OnChanged: (value: number) => void;
	OnCompleted?: (value: number) => void;
	Border?: boolean;
	Background?: boolean;
	Disabled?: boolean;
}

const PADDING_BAR_SIDE = 3;
const PADDING_REGION_TOP = 1;
const PADDING_REGION_SIDE = 6;
const INPUT_MOVE = Enum.UserInputType.MouseMovement;

export default function Slider({
	AnchorPoint,
	Position,
	Size,
	Value,
	Min,
	Max,
	Step = 0,
	OnChanged,
	OnCompleted,
	Border = true,
	Background = true,
	Disabled = false,
	LayoutOrder,
	ZIndex,
}: SliderProps): React.ReactElement {
	const theme = useTheme();

	const dragCallback = (rbx: GuiObject, input: InputObject) => {
		const regionPos = rbx.AbsolutePosition.X + PADDING_REGION_SIDE;
		const regionSize = rbx.AbsoluteSize.X - PADDING_REGION_SIDE * 2;
		const inputPos = input.Position.X;

		let alpha = (inputPos - regionPos) / regionSize;
		alpha = math.clamp(alpha, 0, 1);

		let value = Min * (1 - alpha) + Max * alpha;
		if (Step > 0) {
			value = math.round(value / Step) * Step;
		}
		value = math.clamp(value, Min, Max);
		if (value !== Value) {
			OnChanged(value);
		}
	};

	const dragEndedCallback = () => {
		if (OnCompleted) {
			OnCompleted(Value);
		}
	};

	const drag = useMouseDrag(
		dragCallback,
		[Value, Min, Max, Step, OnCompleted, OnChanged],
		undefined,
		dragEndedCallback,
	);

	const [hovered, setHovered] = React.useState(false);
	let mainModifier: Enum.StudioStyleGuideModifier = Enum.StudioStyleGuideModifier.Default;
	if (Disabled) {
		mainModifier = Enum.StudioStyleGuideModifier.Disabled;
	}

	let handleModifier: Enum.StudioStyleGuideModifier = Enum.StudioStyleGuideModifier.Default;
	if (Disabled) {
		handleModifier = Enum.StudioStyleGuideModifier.Disabled;
	} else if (hovered || drag.isActive()) {
		handleModifier = Enum.StudioStyleGuideModifier.Hover;
	}

	const handleFill = Theme.Colors.Accent;
	const handleBorder = Theme.Colors.Foreground;

	React.useEffect(() => {
		if (Disabled && drag.isActive()) {
			drag.cancel();
		}
	}, [Disabled, drag.isActive()]);

	const inputBegan = (rbx: TextButton, input: InputObject) => {
		if (input.UserInputType === INPUT_MOVE) {
			setHovered(true);
		}
		if (!Disabled) {
			drag.onInputBegan(rbx, input);
		}
	};

	const inputChanged = (rbx: TextButton, input: InputObject) => {
		if (!Disabled) {
			drag.onInputChanged(rbx, input);
		}
	};

	const inputEnded = (rbx: TextButton, input: InputObject) => {
		if (input.UserInputType === INPUT_MOVE) {
			setHovered(false);
		}
		if (!Disabled) {
			drag.onInputEnded(rbx, input);
		}
	};

	return (
		<textbutton
			Text=""
			Active={false}
			AutoButtonColor={false}
			Size={Size || new UDim2(1, 0, 0, Constants.DefaultSliderHeight)}
			Position={Position}
			AnchorPoint={AnchorPoint}
			LayoutOrder={LayoutOrder}
			ZIndex={ZIndex}
			BackgroundColor3={Theme.Colors.Background}
			BorderColor3={Theme.Colors.Foreground}
			BorderMode={Enum.BorderMode.Inset}
			BorderSizePixel={Border ? 1 : 0}
			BackgroundTransparency={Background ? 0 : 1}
			Event={{
				InputBegan: inputBegan,
				InputChanged: inputChanged,
				InputEnded: inputEnded,
			}}
		>
			<frame
				ZIndex={1}
				AnchorPoint={new Vector2(0, 0.5)}
				Position={new UDim2(0, PADDING_BAR_SIDE, 0.5, 0)}
				Size={new UDim2(1, -PADDING_BAR_SIDE * 2, 0, 2)}
				BorderSizePixel={0}
				BackgroundTransparency={Disabled ? 0.4 : 0}
				BackgroundColor3={Theme.Colors.Foreground}
			/>
			<frame
				ZIndex={2}
				Position={new UDim2(0, PADDING_REGION_SIDE, 0, PADDING_REGION_TOP)}
				Size={new UDim2(1, -PADDING_REGION_SIDE * 2, 1, -PADDING_REGION_TOP * 2)}
				BackgroundTransparency={1}
			>
				<frame
					AnchorPoint={new Vector2(0.5, 0)}
					Position={UDim2.fromScale((Value - Min) / (Max - Min), 0)}
					Size={new UDim2(0, 10, 1, 0)}
					BorderMode={Enum.BorderMode.Inset}
					BorderSizePixel={1}
					BorderColor3={handleBorder.Lerp(handleFill, Disabled ? 0.5 : 0)}
					BackgroundColor3={handleFill}
				/>
			</frame>
		</textbutton>
	);
}
