import { Component } from '@angular/core'
import { MyFormModel } from './myformmodel'

@Component({
	selector: 'app-form',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	message: string;

	model = new MyFormModel('message...');

	onSubmit():void {
		this.message = `you typed: ${this.model.msg}`
	}
}
