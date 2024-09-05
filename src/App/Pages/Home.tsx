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

	componentDidMount() {
		this.checkBoomboxStatus();
	}

	checkBoomboxStatus = () => {
		const Boombox = ServerScriptService.FindFirstChild("AudioscapeBoomBox");
		if (Boombox) {
			const BoomboxVersion = Boombox.FindFirstChild("Version") as StringValue;
			const AudioscapeBoomBoxVersion = AudioscapeBoomBox.FindFirstChild("Version") as StringValue;

			if (BoomboxVersion && AudioscapeBoomBoxVersion) {
				if (BoomboxVersion.Value < AudioscapeBoomBoxVersion.Value) {
					this.setState({ buttonText: "Update AudioScape.ai Boombox" });
				} else {
					this.setState({ buttonText: "AudioScape.ai Boombox is up to date" });
				}
			}
		}
	};

	handleActivated = () => {
		const Boombox = ServerScriptService.FindFirstChild("AudioscapeBoomBox");
		if (Boombox) {
			this.updateBoombox(Boombox);
		} else {
			this.addNewBoombox();
		}
	};

	updateBoombox = (Boombox: Instance) => {
		this.setTemporaryButtonText("Find the AudioscapeBoomBox in ServerScriptService!");

		const BoomboxVersion = Boombox.FindFirstChild("Version") as StringValue;
		const LastApiKey = Boombox.FindFirstChild("Developer_API_Key") as StringValue;

		const AudioscapeBoomBoxVersion = AudioscapeBoomBox.FindFirstChild("Version") as StringValue;

		if (BoomboxVersion && AudioscapeBoomBoxVersion) {
			if (BoomboxVersion.Value < AudioscapeBoomBoxVersion.Value) {
				this.replaceBoombox(Boombox, LastApiKey?.Value);
			} else {
				this.setTemporaryButtonText("AudioscapeBoomBox is up to date.");
			}
		}
	};

	replaceBoombox = (oldBoombox: Instance, LastApiKey: string) => {
		print("A newer version of AudioscapeBoomBox is available.");
		oldBoombox.Destroy();
		const newBoombox = AudioscapeBoomBox.Clone();
		newBoombox.Parent = ServerScriptService;

		const apiKeyValue = newBoombox.FindFirstChild("Developer_API_Key") as StringValue;
		if (apiKeyValue) {
			apiKeyValue.Value = LastApiKey !== undefined ? LastApiKey : apiKeyValue.Value;
		}

		this.enableServerScript(newBoombox);
		this.setTemporaryButtonText("AudioscapeBoomBox updated!");
	};

	addNewBoombox = () => {
		const newBoombox = AudioscapeBoomBox.Clone();
		newBoombox.Parent = ServerScriptService;

		this.enableServerScript(newBoombox);
		this.setTemporaryButtonText("Find the AudioscapeBoomBox in ServerScriptService!");
	};

	enableServerScript = (boombox: Instance) => {
		const ServerScript = boombox.FindFirstChild("Server") as Script;
		if (ServerScript) {
			ServerScript.Enabled = true;
		}
	};

	setTemporaryButtonText = (text: string) => {
		this.setState({ buttonText: text });
		task.delay(3, () => {
			this.checkBoomboxStatus();
		});
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
					Activated: this.handleActivated,
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
