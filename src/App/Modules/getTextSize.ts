import { TextService } from "@rbxts/services";
import { Constants } from "App/Constants";

const TEXT_SIZE = Constants.DefaultTextSize;
const FONT = Constants.DefaultFont;
const FRAME_SIZE = Vector2.one.mul(math.huge);

const getTextSize = (text: string): Vector2 => {
	const size = TextService.GetTextSize(text, TEXT_SIZE, FONT, FRAME_SIZE);
	return new Vector2(math.ceil(size.X), math.ceil(size.Y)).add(Vector2.one);
};

export default getTextSize;
