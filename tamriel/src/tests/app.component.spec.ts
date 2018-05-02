import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from '../app/app-main/app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
	TestBed.configureTestingModule({
		imports:[
			RouterTestingModule
		],
		declarations: [
		AppComponent,
		],
		providers: [
			{ provide: Router, useClass: class { navigate = jasmine.createSpy("navigate"); } }
		],
	}).compileComponents();
  }));

  it('should create the app', async(() => {
	const fixture = TestBed.createComponent(AppComponent);
	const app = fixture.debugElement.componentInstance;
	expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
	const fixture = TestBed.createComponent(AppComponent);
	const app = fixture.debugElement.componentInstance;
	expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
	const fixture = TestBed.createComponent(AppComponent);
	fixture.detectChanges();
	const compiled = fixture.debugElement.nativeElement;
	expect(compiled.querySelector('router-outlet').textContent).toBeDefined();
  }));
});
