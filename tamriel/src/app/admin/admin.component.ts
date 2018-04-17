import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-admin",
	templateUrl: "./admin.component.html"
})
export class AdminComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	onClick(path: string) {
		this.router.navigate([path]);
	}
}
