//!optimize 2

import React from "@rbxts/react";
import Label from "App/Components/Label";
import NumericInput from "App/Components/NumericInput";

// import { Label } from "App/Components/Label";
// import { NumericInput } from "App/Components/NumericInput";
import { Constants } from "App/Constants";
import { useMouseDrag } from "App/Hooks/useMouseDrag";
import { Theme } from "App/Theme";

interface ColorPickerProps {
	Color: Color3;
	OnChanged?: (newColor: Color3) => void;
	Disabled?: boolean;
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Size?: UDim2;
	LayoutOrder?: number;
	ZIndex?: number;
}

const SPLIT_Y = 76;
const SPLIT_X = 50;
const PADDING = 8;

function clampVector2(v: Vector2, vmin: Vector2, vmax: Vector2): Vector2 {
	return new Vector2(math.clamp(v.X, vmin.X, vmax.X), math.clamp(v.Y, vmin.Y, vmax.Y));
}

function generateHueKeypoints(value: number): ColorSequence {
	const keypoints: ColorSequenceKeypoint[] = [];
	const regions = 6;
	for (let hue = 0; hue <= regions; hue++) {
		const offset = hue / regions;
		const color = Color3.fromHSV((regions - hue) / regions, 1, value);
		keypoints.push(new ColorSequenceKeypoint(offset, color));
	}
	return new ColorSequence(keypoints);
}

const noop = () => {};

function ValPicker({
	HSV,
	OnChanged,
	Disabled,
}: {
	HSV: [number, number, number];
	OnChanged: (hue: number, sat: number, val: number) => void;
	Disabled?: boolean;
}): React.ReactElement {
	const [hue, sat, val] = HSV;

	const drag = useMouseDrag(
		(rbx: GuiObject, input: InputObject) => {
			const mousePos = input.Position.Y;
			const alpha = (mousePos - rbx.AbsolutePosition.Y) / rbx.AbsoluteSize.Y;
			OnChanged(hue, sat, 1 - math.clamp(alpha, 0, 1));
		},
		[hue, sat, val, OnChanged],
	);

	React.useEffect(() => {
		if (Disabled && drag.isActive()) {
			drag.cancel();
		}
	}, [Disabled, drag.isActive()]);

	const gradientTarget = Color3.fromHSV(hue, sat, 1);

	return (
		<textbutton
			Active={false}
			AutoButtonColor={false}
			Text=""
			Size={new UDim2(0, 14, 1, 0)}
			AnchorPoint={new Vector2(1, 0)}
			Position={new UDim2(1, -6, 0, 0)}
			BorderColor3={Theme.Colors.Background}
			BackgroundColor3={new Color3(1, 1, 1)}
			BackgroundTransparency={Disabled ? 0.75 : 0}
			Event={{
				InputBegan: !Disabled ? drag.onInputBegan : undefined,
				InputChanged: !Disabled ? drag.onInputChanged : undefined,
				InputEnded: !Disabled ? drag.onInputEnded : undefined,
			}}
		>
			<uigradient Color={new ColorSequence(new Color3(), gradientTarget)} Rotation={270} />
			<imagelabel
				AnchorPoint={new Vector2(0, 0.5)}
				Size={UDim2.fromOffset(5, 9)}
				Position={new UDim2(1, 1, 1 - val, 0)}
				BackgroundTransparency={1}
				Image="rbxassetid://7507468017"
				ImageColor3={Theme.Colors.Primary}
				Visible={!Disabled}
			/>
			{Disabled && (
				<frame
					Size={UDim2.fromScale(1, 1)}
					BorderSizePixel={0}
					BackgroundColor3={Theme.Colors.Background}
					BackgroundTransparency={0.5}
					ZIndex={2}
				/>
			)}
		</textbutton>
	);
}

function HueSatPicker({
	HSV,
	OnChanged,
	Disabled,
}: {
	HSV: [number, number, number];
	OnChanged: (hue: number, sat: number, val: number) => void;
	Disabled?: boolean;
}): React.ReactElement {
	const [hue, sat, val] = HSV;
	const bgVal = 220 / 255;
	const indicatorBackground = bgVal > 0.4 ? new Color3() : new Color3(200 / 255, 200 / 255, 200 / 255);

	const drag = useMouseDrag(
		(rbx: GuiObject, input: InputObject) => {
			const mousePos = new Vector2(input.Position.X, input.Position.Y);
			const alpha = mousePos
				.sub(new Vector2(rbx.AbsolutePosition.X, rbx.AbsolutePosition.Y))
				.div(new Vector2(rbx.AbsoluteSize.X, rbx.AbsoluteSize.Y));
			const clampedAlpha = clampVector2(alpha, new Vector2(), new Vector2(1, 1));
			OnChanged(1 - clampedAlpha.X, 1 - clampedAlpha.Y, val);
		},
		[hue, sat, val, OnChanged],
	);

	React.useEffect(() => {
		if (Disabled && drag.isActive()) {
			drag.cancel();
		}
	}, [Disabled, drag.isActive()]);

	return (
		<textbutton
			Size={new UDim2(1, -30, 1, 0)}
			ClipsDescendants={true}
			AutoButtonColor={false}
			BorderColor3={Theme.Colors.Foreground}
			BackgroundTransparency={Disabled ? 0.75 : 0}
			Active={false}
			Text=""
			Event={{
				InputBegan: !Disabled ? drag.onInputBegan : undefined,
				InputChanged: !Disabled ? drag.onInputChanged : undefined,
				InputEnded: !Disabled ? drag.onInputEnded : undefined,
			}}
		>
			<frame BackgroundColor3={new Color3(1, 1, 1)} Size={UDim2.fromScale(1, 1)} ZIndex={0}>
				<uigradient Color={generateHueKeypoints(bgVal)} />
			</frame>
			<frame BackgroundColor3={new Color3(1, 1, 1)} Size={UDim2.fromScale(1, 1)} ZIndex={1}>
				<uigradient
					Color={new ColorSequence(Color3.fromHSV(1, 0, bgVal))}
					Transparency={new NumberSequence(1, 0)}
					Rotation={90}
				/>
			</frame>
			<frame
				AnchorPoint={new Vector2(0.5, 0.5)}
				Position={new UDim2(1 - hue, 0, 1 - sat, 0)}
				Size={UDim2.fromOffset(20, 20)}
				BackgroundTransparency={1}
				ZIndex={2}
				Visible={!Disabled}
			>
				<frame
					Position={UDim2.fromOffset(9, 0)}
					Size={new UDim2(0, 2, 1, 0)}
					BorderSizePixel={0}
					BackgroundColor3={indicatorBackground}
				/>
				<frame
					Position={UDim2.fromOffset(0, 9)}
					Size={new UDim2(1, 0, 0, 2)}
					BorderSizePixel={0}
					BackgroundColor3={indicatorBackground}
				/>
			</frame>
			{Disabled && (
				<frame
					Size={UDim2.fromScale(1, 1)}
					BorderSizePixel={0}
					BackgroundColor3={Theme.Colors.Background}
					BackgroundTransparency={0.5}
					ZIndex={3}
				/>
			)}
		</textbutton>
	);
}

function ColorControl({
	AnchorPoint,
	Position,
	Label: LabelText,
	Value,
	Max,
	Callback,
	Disabled,
}: {
	AnchorPoint?: Vector2;
	Position?: UDim2;
	Label: string;
	Value: number;
	Max: number;
	Callback: (n: number) => void;
	Disabled?: boolean;
}): React.ReactElement {
	const div = 28;
	return (
		<frame
			AnchorPoint={AnchorPoint}
			Position={Position}
			Size={new UDim2(0.5, -PADDING, 0, Constants.DefaultInputHeight)}
			BackgroundTransparency={1}
		>
			<Label
				Text={`${LabelText}:`}
				TextXAlignment={Enum.TextXAlignment.Right}
				Size={new UDim2(0, div, 1, 0)}
				Disabled={Disabled}
			/>

			<NumericInput
				AnchorPoint={new Vector2(1, 0)}
				Position={UDim2.fromScale(1, 0)}
				Size={new UDim2(2, -div - 5, 1, 0)}
				Value={Value}
				Min={0}
				Max={Max}
				OnValidChanged={Callback}
				Arrows={true}
				Disabled={Disabled}
			/>
		</frame>
	);
}

function ColorControls({
	HSV,
	RGB,
	OnChangedHSV,
	OnChangedRGB,
	Disabled,
}: {
	HSV: [number, number, number];
	RGB: [number, number, number];
	OnChangedHSV: (hue: number, sat: number, val: number) => void;
	OnChangedRGB: (red: number, green: number, blue: number) => void;
	Disabled?: boolean;
}): React.ReactElement {
	const [hue, sat, val] = HSV;
	const [red, green, blue] = RGB;

	return (
		<frame
			Size={new UDim2(1, -SPLIT_X - PADDING, 1, 0)}
			AnchorPoint={new Vector2(1, 0)}
			Position={UDim2.fromScale(1, 0)}
			BackgroundTransparency={1}
		>
			<ColorControl
				AnchorPoint={new Vector2(0, 0)}
				Label="Hue"
				Value={math.round(hue * 360)}
				Max={360}
				Callback={(newHue) => OnChangedHSV(newHue / 360, sat, val)}
				Disabled={Disabled}
			/>

			<ColorControl
				AnchorPoint={new Vector2(0, 0.5)}
				Position={UDim2.fromScale(0, 0.5)}
				Label="Sat"
				Value={math.round(sat * 255)}
				Max={255}
				Callback={(newSat) => OnChangedHSV(hue, newSat / 255, val)}
				Disabled={Disabled}
			/>
			<ColorControl
				AnchorPoint={new Vector2(0, 1)}
				Position={UDim2.fromScale(0, 1)}
				Label="Val"
				Value={math.round(val * 255)}
				Max={255}
				Callback={(newVal) => OnChangedHSV(hue, sat, newVal / 255)}
				Disabled={Disabled}
			/>
			<ColorControl
				AnchorPoint={new Vector2(1, 0)}
				Position={UDim2.fromScale(1, 0)}
				Label="Red"
				Value={math.round(red * 255)}
				Max={255}
				Callback={(newRed) => OnChangedRGB(newRed / 255, green, blue)}
				Disabled={Disabled}
			/>
			<ColorControl
				AnchorPoint={new Vector2(1, 0.5)}
				Position={UDim2.fromScale(1, 0.5)}
				Label="Green"
				Value={math.round(green * 255)}
				Max={255}
				Callback={(newGreen) => OnChangedRGB(red, newGreen / 255, blue)}
				Disabled={Disabled}
			/>
			<ColorControl
				AnchorPoint={new Vector2(1, 1)}
				Position={UDim2.fromScale(1, 1)}
				Label="Blue"
				Value={math.round(blue * 255)}
				Max={255}
				Callback={(newBlue) => OnChangedRGB(red, green, newBlue / 255)}
				Disabled={Disabled}
			/>
		</frame>
	);
}

export default function ColorPickerVisual(props: ColorPickerProps): React.ReactElement {
	const onChanged = props.OnChanged || noop;

	const [hsv, setHSV] = React.useState<[number, number, number]>([props.Color.R, props.Color.G, props.Color.B]);
	React.useEffect(() => {
		setHSV((oldHSV) => {
			if (Color3.fromHSV(...oldHSV) !== props.Color) {
				return [props.Color.R, props.Color.G, props.Color.B];
			}
			return oldHSV;
		});
	}, [props.Color]);

	const pickerProps = {
		HSV: hsv,
		OnChanged: (hue: number, sat: number, val: number) => {
			setHSV([hue, sat, val]);
			onChanged(Color3.fromHSV(hue, sat, val));
		},
		Disabled: props.Disabled,
	};

	const modifier = props.Disabled ? Enum.StudioStyleGuideModifier.Disabled : Enum.StudioStyleGuideModifier.Default;

	return (
		<frame
			AnchorPoint={props.AnchorPoint}
			Position={props.Position}
			Size={props.Size || Constants.DefaultColorPickerSize}
			BackgroundColor3={Theme.Colors.Background}
			BorderColor3={Theme.Colors.Foreground}
			BorderMode={Enum.BorderMode.Inset}
			LayoutOrder={props.LayoutOrder}
			ZIndex={props.ZIndex}
		>
			<uipadding
				PaddingLeft={new UDim(0, PADDING)}
				PaddingRight={new UDim(0, PADDING)}
				PaddingTop={new UDim(0, PADDING)}
				PaddingBottom={new UDim(0, PADDING)}
			/>
			<frame Size={new UDim2(1, 0, 1, -SPLIT_Y - PADDING)} BackgroundTransparency={1}>
				<ValPicker {...pickerProps} />
				<HueSatPicker {...pickerProps} />
			</frame>
			<frame
				AnchorPoint={new Vector2(0, 1)}
				Size={new UDim2(1, 0, 0, SPLIT_Y)}
				Position={UDim2.fromScale(0, 1)}
				BackgroundTransparency={1}
			>
				<frame
					Size={new UDim2(0, SPLIT_X, 1, 0)}
					BackgroundTransparency={props.Disabled ? 0.75 : 0}
					BackgroundColor3={props.Color}
					BorderColor3={Theme.Colors.Foreground}
				/>
				<ColorControls
					HSV={hsv}
					RGB={[props.Color.R, props.Color.G, props.Color.B]}
					OnChangedHSV={pickerProps.OnChanged}
					OnChangedRGB={(red, green, blue) => onChanged(new Color3(red, green, blue))}
					Disabled={props.Disabled}
				/>
			</frame>
		</frame>
	);
}
