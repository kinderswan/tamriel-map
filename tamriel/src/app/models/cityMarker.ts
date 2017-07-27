import { DateMarker } from "./dateMarker";

export class CityMarker {
	PointName: string;
	RelativeX: number;
	RelativeY: number;
	Province: string;
	Mentioned: Array<DateMarker>;

	constructor(name: string, positionX: number, positionY: number) {
		this.PointName = name;
		this.RelativeX = positionX;
		this.RelativeY = positionY;
	}
}
