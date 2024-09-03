import React, { Component, ReactComponent } from "@rbxts/react";

@ReactComponent
export class SearchHeader extends Component {
	render() {
		return (
			<frame
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Size={new UDim2(1, 0, 0, 40)}
				LayoutOrder={0}
			>
				<textlabel
					// Key="title"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="Title"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					LayoutOrder={1}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} ShrinkRatio={0.1} />
				</textlabel>

				<textlabel
					// Key="creator"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="Creator"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					LayoutOrder={2}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} GrowRatio={0.2} ShrinkRatio={0.1} />
				</textlabel>

				<textlabel
					// Key="artist"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="Artists"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					LayoutOrder={3}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} GrowRatio={0.2} ShrinkRatio={0.1} />
				</textlabel>

				<textlabel
					// Key="genre"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="Genre"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					LayoutOrder={5}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} GrowRatio={0.2} ShrinkRatio={0.1} />
				</textlabel>

				<textlabel
					// Key="duration"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="Duration"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					LayoutOrder={6}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} GrowRatio={0.2} ShrinkRatio={0.1} />
				</textlabel>

				<uilistlayout
					HorizontalFlex={Enum.UIFlexAlignment.Fill}
					FillDirection={Enum.FillDirection.Horizontal}
					SortOrder={Enum.SortOrder.LayoutOrder}
				/>

				<textlabel
					// Key="number"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="#"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextWrapped={true}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} ShrinkRatio={0.2} />
				</textlabel>

				<textlabel
					// Key="album"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text="Album"
					TextColor3={Color3.fromRGB(255, 255, 255)}
					TextSize={14}
					TextXAlignment={Enum.TextXAlignment.Left}
					BackgroundColor3={Color3.fromRGB(255, 255, 255)}
					BackgroundTransparency={1}
					BorderColor3={Color3.fromRGB(0, 0, 0)}
					BorderSizePixel={0}
					LayoutOrder={4}
					Size={UDim2.fromScale(0.294, 1)}
				>
					<uiflexitem FlexMode={Enum.UIFlexMode.Custom} GrowRatio={0.2} ShrinkRatio={0.1} />
				</textlabel>
			</frame>
		);
	}
}
