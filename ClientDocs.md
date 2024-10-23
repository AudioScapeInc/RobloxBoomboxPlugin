# BoomBoxClient

# BoomBoxClient Documentation

## Overview
BoomBoxClient is a singleton module responsible for controlling music playback in a Roblox game. It provides various methods for syncing audio, interacting with music genres and stations, and controlling the audio player's behavior, such as play, skip, rewind, and volume adjustments.

## Requiring
It is necessary to require the BoomBoxClient module from the LocalPlayer's PlayerGui, as it is a singleton module. 
```lua
local BoomBoxClient = require(Players.LocalPlayer.PlayerGui:WaitForChild("BoomBoxClient"))
```

## Methods

### `GetGenres() -> {string}`
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

### `GetStations() -> {string}`
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

### `PlayGenre(Genre: string)`
Plays music from the specified genre.

#### Parameters:
- `Genre`: The genre of music to play.

#### Example:
```lua
BoomBoxClient:PlayGenre("Trap")
```

---

### `PlayStation(Station: string)`
Plays music from the specified station.

#### Parameters:
- `Station`: The station to play music from.

#### Example:
```lua
BoomBoxClient:PlayStation("Lo-fi Station")
```

---

### `TogglePlay()`
Toggles between play and pause for the current song.

#### Example:
```lua
BoomBoxClient:TogglePlay()
```

---

### `Skip()`
Skips to the next track in the current playlist or station.

#### Example:
```lua
BoomBoxClient:Skip()
```

---

### `Rewind()`
Rewinds to the previous track in the current playlist or station.

#### Example:
```lua
BoomBoxClient:Rewind()
```

---

### `Volume(number: number)`
Sets the volume for the audio player. The volume is clamped to the maximum allowable volume.

#### Parameters:
- `number`: The volume level (between 0 and the maximum volume).

#### Example:
```lua
BoomBoxClient:Volume(5)
```

---

### `MaxVolume(number: number)`
Sets the maximum volume for the audio player.

#### Parameters:
- `number`: The maximum volume level.

#### Example:
```lua
BoomBoxClient:MaxVolume(10)
```

---

### `SetExcludedStations(ExcludedStations: {string})`
Excludes certain stations from being played.

#### Parameters:
- `ExcludedStations`: A list of stations to exclude.

#### Example:
```lua
BoomBoxClient:SetExcludedStations({"Jazz", "Classical"})
```

---

### `SetPlayerVisible(PlayerVisible: boolean)`
Sets the visibility of the audio player UI.

#### Parameters:
- `PlayerVisible`: A boolean value where `true` makes the player visible and `false` hides it.

#### Example:
```lua
BoomBoxClient:SetPlayerVisible(true)
```

---

This documentation provides a comprehensive guide on how to use the primary methods in `BoomBoxClient` for syncing audio, controlling playback, and managing stations and genres.
