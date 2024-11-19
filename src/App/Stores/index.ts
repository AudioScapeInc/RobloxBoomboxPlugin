import { combineProducers, InferState } from "@rbxts/reflex";
import { attributeSlice } from "./Attributes";
import { pluginSlice } from "./Plugin";
export type RootStore = typeof store;

export type RootState = InferState<RootStore>;

export function createStore() {
	const store = combineProducers({
		attribute: attributeSlice,
		plugin: pluginSlice,
	});

	// store.applyMiddleware(profilerMiddleware, receiverMiddleware());

	return store;
}

export const store = createStore();
