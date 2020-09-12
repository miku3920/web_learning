import { Component } from '@angular/core'
import { MyFormModel } from './myformmodel'

type style = { color: string, background: string, fontSize: string, padding: string }

@Component({
	selector: 'app-form',
	templateUrl: './app.component.html',
})
export class AppComponent {
	message = 'this is sample component.'

	model = new MyFormModel('blue', 'white', 24, 10)

	setStyle(): style {
		return {
			color: this.model.color,
			background: this.model.background,
			fontSize: `${this.model.fontSize}pt`,
			padding: `${this.model.padding}px`,
		}
	}
}
