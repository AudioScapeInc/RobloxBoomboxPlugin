import React, { Component, ReactComponent } from "@rbxts/react";
import { ServerScriptService } from "@rbxts/services";

const Pages = script.Parent as Folder;
const App = Pages.Parent as Folder;
const Core = App.WaitForChild("Core") as Folder;

const AudioscapeBoomBox = Core.WaitForChild("AudioscapeBoomBox") as ModuleScript;

interface HomeProps {
	initialCount: number;
}

interface HomeState {
	count: number;
	buttonText: string;
}

@ReactComponent
export class Home extends Component<HomeProps, HomeState> {
	state: HomeState = {
		count: this.props.initialCount,
		buttonText: "Add The AudioScape.ai Boombox",
	};

	render() {
		return (
			<textbutton
				FontFace={
					new Font(
						"rbxasset://fonts/families/SourceSansPro.json",
						Enum.FontWeight.Bold,
						Enum.FontStyle.Normal,
					)
				}
				Text={this.state.buttonText}
				TextColor3={Color3.fromRGB(255, 255, 255)}
				TextScaled={true}
				TextSize={14}
				TextWrapped={true}
				AnchorPoint={new Vector2(0.5, 0.5)}
				BackgroundColor3={Color3.fromRGB(0, 0, 0)}
				BorderColor3={Color3.fromRGB(0, 0, 0)}
				BorderSizePixel={0}
				Position={UDim2.fromScale(0.5, 0.5)}
				Size={UDim2.fromScale(0.5, 0.5)}
				Event={{
					Activated: () => {
						let Boombox = ServerScriptService.FindFirstChild("AudioscapeBoomBox");
						if (Boombox) {
							this.setState({ buttonText: "Find the AudioscapeBoomBox in ServerScriptService!" });
							task.delay(3, () => {
								this.setState({ buttonText: "Add The AudioScape.ai Boombox" });
							});

							return;
						}

						Boombox = AudioscapeBoomBox.Clone();
						Boombox.Parent = ServerScriptService;

						const ServerScript = Boombox.FindFirstChild("Server") as Script;
						if (ServerScript) {
							ServerScript.Enabled = true;
						}

						this.setState({ buttonText: "Find the AudioscapeBoomBox in ServerScriptService!" });
						task.delay(3, () => {
							this.setState({ buttonText: "Add The AudioScape.ai Boombox" });
						});
					},
				}}
			>
				<uicorner />
				<uiaspectratioconstraint AspectRatio={1.78} />
				<uitextsizeconstraint MaxTextSize={15} />
				<uipadding PaddingLeft={new UDim(0.1, 0)} PaddingRight={new UDim(0.1, 0)} />
			</textbutton>
		);
	}
}
