import { Component } from '@angular/core'
import { MyFormModel } from './myformmodel'

@Component({
	selector: 'app-form',
	templateUrl: './app.component.html',
})
export class AppComponent {
	message: string

	model = new MyFormModel('message...', false, 'A')

	onSubmit():void {
		this.message = `${this.model.msg}, ${this.model.check}, ${this.model.radio}`
	}
}
