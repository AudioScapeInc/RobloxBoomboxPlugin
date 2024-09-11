# AudioScape Boombox Plugin Advanced Settings

## Overview
The Audioscape Boombox Plugin allows various developer customizations for setting the location of the player in the game, whether it starts in a minimized state, whether it autoplays music, volume controls, and accent colors. 

The `BoomBox` module is a server-side module for handling boombox functionality within a Roblox game. It primarily manages audio metadata, restructures it, and interacts with players by pushing songs to their play queue. This module is designed to run only on the server.

## Properties

The BoomBox module uses the following properties, which can be configured:

- `DraggingEnabled`: Boolean, default is false. Determines if the boombox UI can be dragged.
- `Autoplay`: Boolean, default is false. Determines if audio should start playing automatically.
- `Minimized`: Boolean, default is false. Determines if the boombox UI starts in a minimized state.
- `MaxVolume`: Number, default is 1. Sets the maximum volume level for the boombox.
- `DefaultPosition`: Vector2, default is (1, 0.5). Sets the default position of the boombox UI to the Right Side of the Screen and centered vertically.
- `DefaultAccentColor`: Color3, default is (1, 1, 1) (white). Sets the default accent color for the boombox UI.

## Methods

### 1. `BoomBox:RestructureFromRobloxMetaData(Songs: { RobloxAudioMetadata })`
This method restructures the audio metadata obtained from Roblox into a custom format suitable for the boombox system.

#### Parameters:
- `Songs`: A table containing one or more `RobloxAudioMetadata` entries, each representing a song's metadata.

#### Returns:
- A JSON-encoded string of the restructured song metadata.

#### Example Usage:
```lua
local restructuredData = BoomBox:RestructureFromRobloxMetaData(SongMetadata)
```

### 2. `BoomBox:PushToQueue(Info: { Players: { Player }?, AssetIDs: { number }, PlayNow: boolean, ClearQueue: boolean, Fade: number? })`
This method pushes songs to the play queue of specified players. It can either play the song immediately, clear the existing queue, or both, depending on the provided options.

#### Parameters:
- `Info`: A table containing:
  - `Players`: (Optional) A list of `Player` instances to whom the songs should be pushed. If not provided, all players in the game will be targeted.
  - `AssetIDs`: A list of asset IDs representing the songs to be queued.
  - `PlayNow`: A boolean indicating whether the songs should play immediately.
  - `ClearQueue`: A boolean indicating whether the existing queue should be cleared before adding the new songs.
  - `Fade`: (Optional) A number indicating the duration of crossfades between songs.

#### Example Usage:
```lua
BoomBox:PushToQueue({
    Players = { Player },
    AssetIDs = { 123456789 },
    PlayNow = true,
    ClearQueue = true,
    Fade = 2
})
```

### 3. `BoomBox:AdjustVolume(Info: { Players: { Player }?, Volume: number })`
This method adjusts the volume for specific players or all players in the game.

#### Parameters:
- `Info`: A table containing:
  - `Players`: (Optional) A list of `Player` instances for whom the volume should be adjusted. If not provided, the volume will be adjusted for all players.
  - `Volume`: The volume level to set (must be a number).

#### Example Usage:
```lua
BoomBox:AdjustVolume({
    Players = { Player },
    Volume = 0.5
})
```

### 4. `BoomBox:AdjustMaxVolume(Info: { Players: { Player }?, MaxVolume: number })`
This method adjusts the maximum volume limit for specific players or all players in the game.

#### Parameters:
- `Info`: A table containing:
  - `Players`: (Optional) A list of `Player` instances for whom the maximum volume should be adjusted. If not provided, the maximum volume will be adjusted for all players.
  - `MaxVolume`: The maximum volume level to set (must be a number).

#### Example Usage:
```lua
BoomBox:AdjustMaxVolume({
    Players = { Player },
    MaxVolume = 1
})
```
