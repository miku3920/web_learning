import { Component } from '@angular/core';

@Component({
	selector: 'app-1',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title = 'Hello!';

	message = '這是 Angular 的範例程式。';
}

@Component({
	selector: 'app-2',
	template: '<h1>{{title}}</h1>',
})
export class OtherComponent {
	title = 'Second Component!';
}
