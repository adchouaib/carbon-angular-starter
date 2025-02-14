import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Custom Components
import { HeaderModule } from "./core/components/header/header.module";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		HeaderModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
