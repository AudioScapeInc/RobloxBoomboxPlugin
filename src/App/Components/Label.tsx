import React from "react";
import { Constants } from "../Constants";
import { CommonProps } from "App/Common";
import { Theme } from "App/Theme";

interface LabelProps extends CommonProps {
	Text: string;
	TextWrapped?: boolean;
	TextXAlignment?: Enum.TextXAlignment;
	TextYAlignment?: Enum.TextYAlignment;
	TextTruncate?: Enum.TextTruncate;
	TextTransparency?: number;
	TextColor3?: Color3;
	RichText?: boolean;
	MaxVisibleGraphemes?: number;
	TextColorStyle?: Enum.StudioStyleGuideColor;
	children?: React.ReactNode;
}

const Label: React.FC<LabelProps> = (props) => {
	const theme = Theme;
	const modifier = props.Disabled ? Enum.StudioStyleGuideModifier.Disabled : Enum.StudioStyleGuideModifier.Default;

	const style = props.TextColorStyle || Enum.StudioStyleGuideColor.MainText;
	let color = theme.Colors.Text;
	if (props.TextColor3 !== undefined) {
		color = props.TextColor3;
	}

	return (
		<textlabel
			AnchorPoint={props.AnchorPoint}
			Position={props.Position}
			Size={props.Size || UDim2.fromScale(1, 1)}
			LayoutOrder={props.LayoutOrder}
			ZIndex={props.ZIndex}
			Text={props.Text}
			BackgroundTransparency={1}
			Font={Constants.DefaultFont}
			TextSize={Constants.DefaultTextSize}
			TextColor3={color}
			TextTransparency={props.TextTransparency}
			TextXAlignment={props.TextXAlignment}
			TextYAlignment={props.TextYAlignment}
			TextTruncate={props.TextTruncate}
			TextWrapped={props.TextWrapped}
			RichText={props.RichText}
			MaxVisibleGraphemes={props.MaxVisibleGraphemes}
		>
			{props.children}
		</textlabel>
	);
};

export default Label;
