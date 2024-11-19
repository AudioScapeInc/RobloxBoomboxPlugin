import { RootState } from "..";

export const getAutoPlay = (state: RootState) => {
	return state.attribute.AutoPlay;
};

export const getDefaultAccentColor = (state: RootState) => {
	return state.attribute.DefaultAccentColor;
};

export const getDefaultPosition = (state: RootState) => {
	return state.attribute.DefaultPosition;
};

export const getDraggingEnabled = (state: RootState) => {
	return state.attribute.DraggingEnabled;
};

export const getMaxVolume = (state: RootState) => {
	return state.attribute.MaxVolume;
};

export const getMinimized = (state: RootState) => {
	return state.attribute.Minimized;
};

export const getSearchEnabled = (state: RootState) => {
	return state.attribute.SearchEnabled;
};
