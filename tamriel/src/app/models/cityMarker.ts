export class CityMarker {
	Name: string;
	PositionX: number;
	PositionY: number;
	TimePeriodId: string;

	constructor(name: string, positionX: number, positionY: number, timePeriodId: string) {
		this.Name = name;
		this.PositionX = positionX;
		this.PositionY = positionY;
		this.TimePeriodId = timePeriodId;
	}
}