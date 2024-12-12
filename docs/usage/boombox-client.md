---
sidebar_position: 3
---
# BoomBox Client

## BoomBoxClient Documentation

## Overview
BoomBoxClient is a singleton module responsible for controlling music playback in a Roblox game. It provides various methods for syncing audio, interacting with music genres and stations, and controlling the audio player's behavior, such as play, skip, rewind, and volume adjustments.

## Requiring
It is necessary to require the BoomBoxClient module from the LocalPlayer's PlayerGui, as it is a singleton module. 
```lua
local BoomBoxClient = require(Players.LocalPlayer.PlayerGui:WaitForChild("BoomBoxClient"))
```

## Methods

## SyncToBeat
`SyncToBeat(Callback: (Beat: number, BeatDuration: number) -> nil)`
Syncs a callback function to the beat of the current sound. This callback is triggered every time a beat occurs in the audio.

#### Parameters:
- `Callback`: A function that receives two parameters: `Beat` (the current beat number) and `BeatDuration` (the duration of the beat).

#### Example:
```lua
BoomBoxClient:SyncToBeat(function(Beat, BeatDuration)
    print("Beat:", Beat, "Duration:", BeatDuration)
end)
```

---
## SyncToSixteenthNote
`SyncToSixteenthNote(Callback: (SixteenthNote: number, NoteDuration: number) -> nil)`
Syncs a callback function to the sixteenth note of the current sound. This callback is triggered every time a sixteenth note is played.

#### Parameters:
- `Callback`: A function that receives two parameters: `SixteenthNote` (the current sixteenth note) and `NoteDuration` (the duration of the note).

#### Example:
```lua
BoomBoxClient:SyncToSixteenthNote(function(SixteenthNote, NoteDuration)
    print("Sixteenth Note:", SixteenthNote, "Duration:", NoteDuration)
end)
```

---

## SyncToDownBeat
`SyncToDownBeat(Callback: (Beat: number) -> nil)`
Syncs a callback function to the downbeat of the current sound.

#### Parameters:
- `Callback`: A function that receives one parameter: `Beat` (the current downbeat).

#### Example:
```lua
BoomBoxClient:SyncToDownBeat(function(Beat)
    print("Downbeat:", Beat)
end)
```

---

## GetGenres
`GetGenres() -> {string}`
Retrieves the available genres from the system after ensuring that the genres are loaded. The genres are matched against a predefined list in `GenreBoxText`.

#### Returns:
- `Genres`: A list of available genres.

#### Example:
```lua
local genres = BoomBoxClient:GetGenres()
for _, genre in ipairs(genres) do
    print(genre)
end
```

---

## GetStations
`GetStations() -> {string}`
Retrieves the available stations, excluding those that are part of the predefined `GenreBoxText`. The stations are retrieved after ensuring that the system is fully loaded.

#### Returns:
- `Stations`: A list of available stations.

#### Example:
```lua
local stations = BoomBoxClient:GetStations()
for _, station in ipairs(stations) do
    print(station)
end
```

---

## PlayGenre
`PlayGenre(Genre: string)`
Plays music from the specified genre.

#### Parameters:
- `Genre`: The genre of music to play.

#### Example:
```lua
BoomBoxClient:PlayGenre("Trap")
```

---

## PlayStation
`PlayStation(Station: string)`
Plays music from the specified station.

#### Parameters:
- `Station`: The station to play music from.

#### Example:
```lua
BoomBoxClient:PlayStation("Lo-fi Station")
```

---

## TogglePlay
`TogglePlay()`
Toggles between play and pause for the current song.

#### Example:
```lua
BoomBoxClient:TogglePlay()
```

---

## ListenToSong
`ListenToSong(Callback: (Song: {asset_name: string} | nil) -> nil)`
Listens to the current song and triggers a callback function with the song name.

#### Parameters:
- `Callback`: A function that receives one parameter: `Song` (the current song).

#### Example:
```lua
BoomBoxClient:ListenToSong(function(Song)
    if not Song then return end
    print("Current Song:", Song.asset_name)
end)
```

---

## ListenToPlayToggle
`ListenToPlayToggle(Callback: (IsPlaying: boolean) -> nil)`
Listens to the play toggle and triggers a callback function with the current play state.

#### Parameters:
- `Callback`: A function that receives one parameter: `IsPlaying` (the current play state).

#### Example:
```lua
BoomBoxClient:ListenToPlayToggle(function(IsPlaying)
    print("Is Playing:", IsPlaying)
end)
```

---

## Skip
`Skip()`
Skips to the next track in the current playlist or station.

#### Example:
```lua
BoomBoxClient:Skip()
```

---

## Rewind
`Rewind()`
Rewinds to the previous track in the current playlist or station.

#### Example:
```lua
BoomBoxClient:Rewind()
```

---

## Volume
`Volume(number: number)`
Sets the volume for the audio player. The volume is clamped to the maximum allowable volume.

#### Parameters:
- `number`: The volume level (between 0 and the maximum volume).

#### Example:
```lua
BoomBoxClient:Volume(5)
```

---

## MaxVolume
`MaxVolume(number: number)`
Sets the maximum volume for the audio player.

#### Parameters:
- `number`: The maximum volume level.

#### Example:
```lua
BoomBoxClient:MaxVolume(10)
```

---

## SetExcludedStations
`SetExcludedStations(ExcludedStations: {string})`
Excludes certain stations from being played.

#### Parameters:
- `ExcludedStations`: A list of stations to exclude.

#### Example:
```lua
BoomBoxClient:SetExcludedStations({"Jazz", "Classical"})
```

---

## SetPlayerVisible
`SetPlayerVisible(PlayerVisible: boolean)`
Sets the visibility of the audio player UI.

#### Parameters:
- `PlayerVisible`: A boolean value where `true` makes the player visible and `false` hides it.

#### Example:
```lua
BoomBoxClient:SetPlayerVisible(true)
```

