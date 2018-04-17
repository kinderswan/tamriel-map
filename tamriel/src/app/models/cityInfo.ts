import { DateMarker } from "./dateMarker";

export class CityInfo {
	Info: Array<InfoYear>;
	PointName: string;
}

export class InfoYear {
	InfoText: string;
	Mentioned: DateMarker;
}
