import { RootState } from "..";

export const getPluginWindow = (state: RootState) => {
	return state.plugin.PluginWindow;
};

export const getStoryFrame = (state: RootState) => {
	return state.plugin.StoryFrame;
};
