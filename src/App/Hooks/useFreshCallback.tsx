import React from "@rbxts/react";

type Callback<Args extends unknown[], Rets extends unknown[]> = (...args: Args) => [...Rets];

function useFreshCallback<Args extends unknown[], Rets extends unknown[]>(
	callback: Callback<Args, Rets>,
	deps?: React.DependencyList,
): Callback<Args, Rets> {
	const ref = React.useRef<Callback<Args, Rets>>(callback);

	React.useEffect(() => {
		ref.current = callback;
	}, deps);

	return (...args: Args) => {
		return ref.current(...args);
	};
}

export default useFreshCallback;
