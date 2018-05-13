import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
	private readonly storagePrefix = "TAMRIEL_MAP_";

	public addItem(key: string, value: string): void {
		localStorage.setItem(this.storagePrefix + key, value);
	}

	public getItem(key: string): string {
		return localStorage.getItem(this.storagePrefix + key);
	}

	public removeItem(key: string) {
		localStorage.removeItem(this.storagePrefix + key);
	}

	public isInStorage(key: string): boolean {
		return !!localStorage.getItem(this.storagePrefix + key);
	}

	public removeAll(): void{
		localStorage.clear;
	}
}
