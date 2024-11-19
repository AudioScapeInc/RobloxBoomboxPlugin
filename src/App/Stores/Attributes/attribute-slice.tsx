import { createProducer } from "@rbxts/reflex";

interface State {
	AutoPlay: boolean;
	DefaultAccentColor: Color3;
	DefaultPosition: Vector2;
	DraggingEnabled: boolean;
	MaxVolume: number;
	Minimized: boolean;
	SearchEnabled: boolean;
}

const initialState: State = {
	AutoPlay: true,
	DefaultAccentColor: Color3.fromRGB(255, 255, 255),
	DefaultPosition: new Vector2(1, 0.5),
	DraggingEnabled: true,
	MaxVolume: 1,
	Minimized: false,
	SearchEnabled: true,
};

export const attributeSlice = createProducer(initialState, {
	setAutoPlay: (state, autoPlay: boolean) => ({ ...state, AutoPlay: autoPlay }),
	setDefaultAccentColor: (state, defaultAccentColor: Color3) => ({
		...state,
		DefaultAccentColor: defaultAccentColor,
	}),
	setDefaultPosition: (state, defaultPosition: Vector2) => ({ ...state, DefaultPosition: defaultPosition }),
	setDraggingEnabled: (state, draggingEnabled: boolean) => ({ ...state, DraggingEnabled: draggingEnabled }),
	setMaxVolume: (state, maxVolume: number) => ({ ...state, MaxVolume: maxVolume }),
	setMinimized: (state, minimized: boolean) => ({ ...state, Minimized: minimized }),
	setSearchEnabled: (state, searchEnabled: boolean) => ({ ...state, SearchEnabled: searchEnabled }),
});
