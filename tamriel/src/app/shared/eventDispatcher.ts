export class EventDispatcher {

	public subscribe(eventName: string, callback: any, context: any): void {
		window.addEventListener(eventName, callback.bind(context), false);
	}

	public publish(eventName: string, data: any): void {
		let event: Event = new CustomEvent(eventName, { detail: data });
		window.dispatchEvent(event)

	}
}

export const Events: { Components: { CityInfo: any, MapLayout: any, TimelineScroll: any } } = {
	Components: {
		CityInfo: {},
		MapLayout: {
			"MapCitySelected": "MapCitySelected"
		},
		TimelineScroll: {
			"TimePeriodSelected": "TimePeriodSelected"
		}

	}
}