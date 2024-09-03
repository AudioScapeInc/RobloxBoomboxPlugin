import React, { Component, ReactComponent } from "@rbxts/react";
import { SearchResult } from "../SearchResult/SearchResult";
import { SearchHeader } from "../SearchHeader/SearchHeader";

interface SearchResultContainerProps {
	initialResults: number[];
}

interface SearchResultContainerState {
	results: number[];
}

@ReactComponent
export class SearchResultContainer extends Component<SearchResultContainerProps, SearchResultContainerState> {
	state: SearchResultContainerState = {
		results: this.props.initialResults,
	};

	render() {
		return (
			<frame Size={UDim2.fromScale(1, 1)} BackgroundTransparency={0} BackgroundColor3={new Color3(0, 0, 0)}>
				<uilistlayout FillDirection={Enum.FillDirection.Vertical} SortOrder={Enum.SortOrder.LayoutOrder} />
				<SearchHeader />

				<SearchResult
					number={1}
					title="title"
					creator="creator"
					artist="artist"
					genre="genre"
					duration={100}
					album="album"
				/>
				<SearchResult
					number={2}
					title="title"
					creator="creator"
					artist="artist"
					genre="genre"
					duration={100}
					album="album"
				/>
			</frame>
		);
	}
}
