import { DateMarker } from "./dateMarker";

export class CityMarker {
	Name: string;
	PositionX: number;
	PositionY: number;
	Province: string;
	Mentioned: Array<DateMarker>;

	constructor(name: string, positionX: number, positionY: number) {
		this.Name = name;
		this.PositionX = positionX;
		this.PositionY = positionY;
	}
}
