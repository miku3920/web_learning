import { Component } from '@angular/core'
import { MyFormModel } from './myformmodel'

type myclass = { classA: boolean, classB: boolean }

@Component({
	selector: 'app-form',
	templateUrl: './app.component.html',
})
export class AppComponent {
	message = 'this is sample component.'

	model = new MyFormModel(false, false)

	setClass(): myclass {
		return {
			classA: this.model.classA,
			classB: this.model.classB,
		}
	}
}
