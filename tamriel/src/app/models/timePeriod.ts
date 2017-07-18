import { DateMarker } from "./dateMarker";

export class TimePeriod {
	public StartTime: DateMarker;
	public EndTime: DateMarker;

	public get Id() {
		return this.createDateTimeId();
	};

	private createDateTimeId(): string {
		return `${this.StartTime.Epoch + this.StartTime.Year}-${this.EndTime.Epoch + this.EndTime.Year}`;
	};
}
