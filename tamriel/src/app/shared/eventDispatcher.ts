export class EventDispatcher {

	public subscribe(eventName: string, callback: any, context: any): void {
		window.addEventListener(eventName, callback.bind(context), false);
	}

	public publish(eventName: string, data: {}): void {
		const event: Event = new CustomEvent(eventName, { detail: data });
		window.dispatchEvent(event)

	}
}

export const Events: { Components: { CityInfo: {}, MapLayout: {}, TimelineScroll: {} } } = {
	Components: {
		CityInfo: {},
		MapLayout: {
			'MapCitySelected': 'MapCitySelected',
			'MapFlagSelected': 'MapFlagSelected'
		},
		TimelineScroll: {
			'TimePeriodSelected': 'TimePeriodSelected'
		}

	}
}
