import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, OtherComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent,
		OtherComponent,
	],
	imports: [
		BrowserModule,
	],
	providers: [],
	bootstrap: [AppComponent, OtherComponent],
})
export class AppModule { }
