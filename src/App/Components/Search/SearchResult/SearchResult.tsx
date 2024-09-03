import React, { Component, ReactComponent, useState } from "@rbxts/react";

interface SearchResultProps {
	number: number;
	title: string;
	creator: string;
	artist: string;
	genre: string;
	duration: number;
	album: string;
}

export function SearchResult({ number, title, creator, artist, genre, duration, album }: SearchResultProps) {
	return (
		<frame Size={new UDim2(1, 0, 0, 40)} BackgroundTransparency={1} LayoutOrder={number}>
			<uilistlayout FillDirection={Enum.FillDirection.Vertical} SortOrder={Enum.SortOrder.LayoutOrder} />
			<frame LayoutOrder={1} Size={new UDim2(1, 0, 0, 1)} BackgroundTransparency={0}></frame>

			<frame
				BackgroundColor3={Color3.fromRGB(255, 255, 255)}
				BackgroundTransparency={1}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Size={UDim2.fromScale(1, 1)}
				LayoutOrder={1}
			>
				<textlabel
					// Key="title"
					FontFace={new Font("rbxasset://fonts/families/HighwayGothic.json")}
					Text={title || "Unknown"}
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
					Text={creator || "Unknown"}
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
					Text={artist || "Unknown"}
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
					Text={genre || "Unknown"}
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
					Text={tostring(duration) || "NaN"}
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
					Text={tostring(number) || "NaN"}
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
					Text={album || "Unknown"}
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
		</frame>
	);
}
