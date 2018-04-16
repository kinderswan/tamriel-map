import { Input, Component, EventEmitter, Output } from "@angular/core";
import { TimePeriod } from "app/models/timePeriod";

@Component({
	selector: "app-timeline-block",
	templateUrl: "./timeline-block.component.html"
})
export class TimelineBlockComponent {
	constructor() {}

	@Input() period: TimePeriod;

	@Output() onClick: EventEmitter<TimePeriod> = new EventEmitter<TimePeriod>();

	get textContent(): string {
		return `${this.period.StartTime.Epoch + this.period.StartTime.Year}-${this.period.EndTime.Epoch + this.period.EndTime.Year}`;
	}

	onSubmit() {
		this.onClick.emit(this.period);
	}
}
