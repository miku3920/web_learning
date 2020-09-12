import { Component } from '@angular/core'
import { MyFormModel } from './myformmodel'

@Component({
	selector: 'app-form',
	templateUrl: './app.component.html',
})
export class AppComponent {
	message: string

	model = new MyFormModel('', [])

	items1 = ['北海道', '本州', '四國', '九州', '沖繩']

	items2 = ['Windows', 'macOS', 'Linux', 'Android', 'iOS']

	onSubmit(): void {
		this.message = `${this.model.select1} [${this.model.select2}]`
	}
}
