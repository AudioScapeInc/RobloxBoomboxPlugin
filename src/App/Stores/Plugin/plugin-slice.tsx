import { createProducer } from "@rbxts/reflex";

interface State {
	PluginWindow: DockWidgetPluginGui | undefined;
	StoryFrame: Frame | undefined;

	ShowColorPicker: boolean;
}

const initialState: State = {
	PluginWindow: undefined,
	StoryFrame: undefined,

	ShowColorPicker: false,
};

export const pluginSlice = createProducer(initialState, {
	setPluginWindow: (state, pluginWindow: DockWidgetPluginGui) => ({ ...state, PluginWindow: pluginWindow }),
	setStoryFrame: (state, storyFrame: Frame) => ({ ...state, StoryFrame: storyFrame }),
	setShowColorPicker: (state, showColorPicker: boolean) => ({ ...state, ShowColorPicker: showColorPicker }),
});
