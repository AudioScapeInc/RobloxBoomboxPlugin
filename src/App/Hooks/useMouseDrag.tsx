import React from "@rbxts/react";
import useFreshCallback from "./useFreshCallback";

interface MouseDragResult {
	isActive: () => boolean;
	cancel: () => void;
	onInputBegan: (rbx: GuiObject, input: InputObject) => void;
	onInputChanged: (rbx: GuiObject, input: InputObject) => void;
	onInputEnded: (rbx: GuiObject, input: InputObject) => void;
}

export function useMouseDrag(
	callback: (rbx: GuiObject, input: InputObject) => void,
	deps?: unknown[],
	onBeganCallback?: (rbx: GuiObject, input: InputObject) => void,
	onEndedCallback?: () => void,
): MouseDragResult {
	const freshCallback = useFreshCallback((rbx: GuiObject, input: InputObject): unknown[] => {
		callback(rbx, input);
		return [];
	}, deps);

	const [holdingState, setHoldingState] = React.useState(false);
	const holding = React.useRef(false);

	const lastRbx = React.useRef<GuiObject | undefined>(undefined);
	const moveInput = React.useRef<InputObject | undefined>(undefined);
	const moveConnection = React.useRef<RBXScriptConnection | undefined>(undefined);

	const runCallback = (input: InputObject) => {
		freshCallback(lastRbx.current!, input);
	};

	const connect = () => {
		if (moveConnection.current) {
			moveConnection.current.Disconnect();
		}
		const input = moveInput.current!;
		const signal = input.GetPropertyChangedSignal("Position");
		moveConnection.current = signal.Connect(() => {
			runCallback(input);
		});
		runCallback(input);
	};

	const disconnect = () => {
		if (moveConnection.current) {
			moveConnection.current.Disconnect();
			moveConnection.current = undefined;
		}
		if (onEndedCallback && holding.current === true) {
			onEndedCallback();
		}
	};

	React.useEffect(() => {
		return disconnect;
	}, []);

	const onInputBegan = (rbx: GuiObject, input: InputObject) => {
		lastRbx.current = rbx;
		if (input.UserInputType === Enum.UserInputType.MouseMovement) {
			moveInput.current = input;
		} else if (input.UserInputType === Enum.UserInputType.MouseButton1) {
			holding.current = true;
			setHoldingState(true);
			if (onBeganCallback) {
				onBeganCallback(rbx, input);
			}
			if (moveInput.current) {
				connect();
			} else {
				runCallback(input);
			}
		}
	};

	const onInputChanged = (rbx: GuiObject, input: InputObject) => {
		lastRbx.current = rbx;
		if (input.UserInputType === Enum.UserInputType.MouseMovement) {
			moveInput.current = input;
			if (holding.current && !moveConnection.current) {
				connect();
			}
		}
	};

	const onInputEnded = (rbx: GuiObject, input: InputObject) => {
		lastRbx.current = rbx;
		if (input.UserInputType === Enum.UserInputType.MouseButton1) {
			disconnect();
			holding.current = false;
			setHoldingState(false);
		}
	};

	const isActive = () => {
		return holdingState === true;
	};

	const cancel = () => {
		disconnect();
		holding.current = false;
		moveInput.current = undefined;
		setHoldingState(false);
	};

	return {
		isActive,
		cancel,
		onInputBegan,
		onInputChanged,
		onInputEnded,
	};
}
