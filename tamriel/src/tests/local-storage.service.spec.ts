import { TestBed, inject } from "@angular/core/testing";
import { LocalStorageService } from "app/shared/localstorage.service";

describe("LocalStorageService", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                LocalStorageService
            ]
        });
        localStorage.clear();
    });

    it(
        "should be created",
        inject([LocalStorageService], (service: LocalStorageService) => {
            expect(service).toBeTruthy();
        })
    );

    it("should create a key value pair", inject([LocalStorageService], (service: LocalStorageService) => {
        service.addItem("testItem", "value");
        const result = service.getItem("testItem");
        expect(result).toBe("value");
    })
    );

    it("should check if an item exists", inject([LocalStorageService], (service: LocalStorageService) => {
        service.addItem("testItem", "value");
        const result = service.isInStorage("testItem");
        expect(result).toBeTruthy;
    })
    );

    it("should check if an item doesn't exist", inject([LocalStorageService], (service: LocalStorageService) => {
        const result = service.isInStorage("randomItem");
        expect(result).toBeFalsy;
    })
    );

    it("should check if cleanup works", inject([LocalStorageService], (service: LocalStorageService) => {
        service.addItem("1", "2");
        service.addItem("4", "2");
        service.addItem("2", "2");
        service.removeItem("1");
        expect(service.getItem("1")).toBeUndefined;
    })
    );

    it("should check if cleans all", inject([LocalStorageService], (service: LocalStorageService) => {
        service.addItem("1", "2");
        service.addItem("4", "2");
        service.addItem("2", "2");
        service.removeAll();
        expect(localStorage.length).toBe(0);
    })
    );
});
