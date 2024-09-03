import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox"
import type { InferProps } from "@rbxts/ui-labs/src/Typing/Typing";

import {SearchResult} from "./SearchResult";

const controls = {
   Visible: true,
}

const story = {
   react: React,
   reactRoblox: ReactRoblox,
   controls: controls,
   story: (props: InferProps<typeof controls>) => {
      const component = <SearchResult number={1} title="Random Title" creator="Random Creator" artist="Random Artist" genre="Random Genre" duration={100} album="Random Album" />
      return component
   }
}

export = story;