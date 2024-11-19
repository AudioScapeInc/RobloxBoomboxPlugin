//!optimize 2

import React from "@rbxts/react";
import { Theme } from "App/Theme";

interface BooleanInputProps extends React.PropsWithChildren {
	value: boolean;
}

export default function BooleanInput({ children, value }: BooleanInputProps): React.Element {
	const [isHovered, setIsHovered] = React.useState(value);
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
				BackgroundColor3={isHovered ? Theme.Colors.Success : Theme.Colors.Background}
				BorderSizePixel={0}
				Event={{
					MouseButton1Click: () => {
						setIsHovered(!isHovered);
					},
				}}
			>
				<uicorner CornerRadius={new UDim(0, 2)} />
				<uiaspectratioconstraint />
				<uistroke Color={Theme.Colors.Foreground} Thickness={2} Transparency={isHovered ? 0.5 : 0} />
			</imagebutton>
		</frame>
	);
}
