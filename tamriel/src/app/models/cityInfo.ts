import { DateMarker } from "./dateMarker";

export class CityInfo {
	Info: Array<InfoYear>;
	PointName: string;
};

class InfoYear{
	InfoText: string;
	Mentioned: DateMarker
}