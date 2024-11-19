interface AudioscapeBoombox extends ModuleScript {
	Interface: ModuleScript & {
		Config: Folder & {
			InterfaceSignals: ModuleScript;
			InterfaceStates: ModuleScript;
			InterfaceSettings: ModuleScript;
		};
		Stories: Folder & {
			["Search.story"]: ModuleScript;
			["Root.story"]: ModuleScript;
			["Queue.story"]: ModuleScript;
			["AudioPlayer.story"]: ModuleScript;
		};
		Util: Folder & {
			AudioPlayerSider: ModuleScript;
			Capitalize: ModuleScript;
			PastelColor: ModuleScript;
			Genres: ModuleScript;
			Screen: ModuleScript;
			Sounds: ModuleScript;
			MatteColor: ModuleScript;
			Instween: ModuleScript;
			TimeSorter: ModuleScript;
			Luminance: ModuleScript;
			Draggable: ModuleScript;
			UICorner: ModuleScript;
			Camera: ModuleScript;
			Search: ModuleScript;
			Viewport: ModuleScript;
			Tweens: ModuleScript;
			UIStroke: ModuleScript;
			Images: ModuleScript;
			PlayerFromId: ModuleScript;
		};
		Pages: Folder & {
			Root: ModuleScript;
			Search: ModuleScript;
			AudioPlayer: ModuleScript;
			Queue: ModuleScript;
		};
		Handlers: Folder & {
			Handlers_Interface: ModuleScript;
		};
		Components: Folder & {
			AudioPlayer: Folder & {
				AudioControls: ModuleScript & {
					Rewind: ModuleScript;
					Shuffle: ModuleScript;
					Volume: ModuleScript;
					Skip: ModuleScript;
					Like: ModuleScript;
					Play: ModuleScript;
					Queue: ModuleScript;
				};
				Buttons: ModuleScript;
				AudioControlsVertical: ModuleScript & {
					Rewind: ModuleScript;
					Play: ModuleScript;
					Skip: ModuleScript;
				};
				TimeBar: ModuleScript;
				AudioscapeButton: ModuleScript;
				Playing: ModuleScript & {
					SongInfo: ModuleScript;
					AudioscapeButtonMaximized: ModuleScript;
				};
			};
			Root: Folder;
			Search: Folder & {
				GenreBoxes: ModuleScript;
				Tabs: ModuleScript;
				SearchResults: ModuleScript & {
					SearchResult: ModuleScript;
				};
				SearchingFrame: ModuleScript;
				SearchBar: ModuleScript;
				PillsContainer: ModuleScript & {
					Pill: ModuleScript;
				};
			};
			Base: Folder & {
				TextLabel: ModuleScript;
				InputLabel: ModuleScript;
				ImageButton: ModuleScript;
			};
			Queue: Folder & {
				SearchBar: ModuleScript;
				Favorites: ModuleScript & {
					SearchResult: ModuleScript;
				};
				QueueHeader: ModuleScript;
				Tabs: ModuleScript;
				QueueContainer: ModuleScript & {
					QueueItem: ModuleScript;
					QueueItemLite: ModuleScript;
				};
				PillsContainer: ModuleScript & {
					Pill: ModuleScript;
				};
			};
		};
		Types: Folder & {
			Sound: ModuleScript;
		};
	};
	Version: StringValue;
	BoomBoxPackages: Folder & {
		_Index: Folder & {
			["elttob_fusion@0.2.0"]: Folder & {
				fusion: ModuleScript & {
					Animation: Folder & {
						Tween: ModuleScript;
						Spring: ModuleScript;
						lerpType: ModuleScript;
						SpringScheduler: ModuleScript;
						TweenScheduler: ModuleScript;
						getTweenRatio: ModuleScript;
						springCoefficients: ModuleScript;
						packType: ModuleScript;
						unpackType: ModuleScript;
					};
					Instances: Folder & {
						Cleanup: ModuleScript;
						defaultProps: ModuleScript;
						applyInstanceProps: ModuleScript;
						OnEvent: ModuleScript;
						OnChange: ModuleScript;
						Hydrate: ModuleScript;
						Out: ModuleScript;
						Ref: ModuleScript;
						Children: ModuleScript;
						New: ModuleScript;
					};
					State: Folder & {
						Observer: ModuleScript;
						ForValues: ModuleScript;
						unwrap: ModuleScript;
						ForKeys: ModuleScript;
						Value: ModuleScript;
						Computed: ModuleScript;
						ForPairs: ModuleScript;
					};
					Utility: Folder & {
						cleanup: ModuleScript;
						doNothing: ModuleScript;
						restrictRead: ModuleScript;
						xtypeof: ModuleScript;
						isSimilar: ModuleScript;
						needsDestruction: ModuleScript;
						None: ModuleScript;
					};
					Types: ModuleScript;
					Logging: Folder & {
						messages: ModuleScript;
						logError: ModuleScript;
						parseError: ModuleScript;
						logErrorNonFatal: ModuleScript;
						logWarn: ModuleScript;
					};
					PubTypes: ModuleScript;
					Dependencies: Folder & {
						initDependency: ModuleScript;
						sharedState: ModuleScript;
						updateAll: ModuleScript;
						useDependency: ModuleScript;
						captureDependencies: ModuleScript;
					};
					Colour: Folder & {
						Oklab: ModuleScript;
					};
				};
			};
			["flamenco687_maid@3.2.2"]: Folder & {
				maid: ModuleScript & {
					wally: ModuleScript;
				};
			};
		};
		Fusion: ModuleScript;
		Maid: ModuleScript;
	};
	AttributeConfiguration: Configuration;
	Client: LocalScript & {
		Data: Folder & {
			Songs: ModuleScript;
		};
		AudioListener: AudioListener & {
			AudioDeviceOutput: AudioDeviceOutput & {
				Wire: Wire;
			};
		};
		Util: Folder & {
			Instween: ModuleScript;
			TimeSorter: ModuleScript;
			Lerp: ModuleScript;
		};
		Managers: ModuleScript & {
			AudioControls: ModuleScript;
			Telemetry: ModuleScript;
			Like: ModuleScript;
			Queue: ModuleScript;
			HeadlessRemotes: ModuleScript;
			Persistence: ModuleScript;
			Search: ModuleScript;
			Loader: ModuleScript;
			BoomboxReplicator: ModuleScript;
		};
	};
	Server: Script & {
		BoomBox: Part & {
			AudioPlayer: AudioPlayer;
			LeftSpeakerAttachment: Attachment;
			AudioFader: AudioFader & {
				Wire: Wire;
			};
			RightSpeaker: Part & {
				RightSpeakerReciever: Attachment;
				RigidConstraint: RigidConstraint;
				AudioEmitter: AudioEmitter & {
					Wire: Wire;
				};
			};
			LeftSpeaker: Part & {
				LeftSpeakerReciever: Attachment;
				RigidConstraint: RigidConstraint;
				AudioEmitter: AudioEmitter & {
					Wire: Wire;
				};
			};
			Mesh: SpecialMesh;
			RightSpeakerAttachment: Attachment;
		};
		Events: ModuleScript;
		API: Folder & {
			API_Telemetry: ModuleScript;
			API_Persistence: ModuleScript;
		};
		Debug: ModuleScript;
		Types: ModuleScript;
	};
	Developer_API_Key: StringValue;
}
