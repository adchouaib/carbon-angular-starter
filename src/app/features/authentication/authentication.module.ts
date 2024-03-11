import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

import { ReactiveFormsModule } from "@angular/forms";
import Login20 from "@carbon/icons/es/login/20";

import {
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	InputModule,
	ButtonModule,
	TagModule,
	BreadcrumbModule,
	CheckboxModule,
	ComboBoxModule,
	AccordionModule,
	TableModule,
	ToggleModule,
	DatePickerModule,
	SearchModule as SearchModuleComponent,
	ContentSwitcherModule,
	SkeletonModule,
	DialogModule,
	LinkModule,
	NotificationModule,
	RadioModule,
	PaginationModule,
	SelectModule,
	SliderModule,
	NumberModule,
	FileUploaderModule,
	ProgressIndicatorModule,
	ModalModule,
	LayerModule,
	IconService,
	IconModule,
	ThemeModule,
	UIShellModule,
} from "carbon-components-angular";

const carbonModules = [
	GridModule,
	ListModule,
	TabsModule,
	TilesModule,
	InputModule,
	ButtonModule,
	TagModule,
	BreadcrumbModule,
	CheckboxModule,
	ComboBoxModule,
	AccordionModule,
	ProgressIndicatorModule,
	TableModule,
	ToggleModule,
	DatePickerModule,
	SearchModuleComponent,
	ContentSwitcherModule,
	SkeletonModule,
	DialogModule,
	LinkModule,
	NotificationModule,
	RadioModule,
	PaginationModule,
	SelectModule,
	SliderModule,
	NumberModule,
	FileUploaderModule,
	ModalModule,
	LayerModule,
	IconModule,
	ThemeModule,
	UIShellModule,
];

@NgModule({
	declarations: [LoginComponent, RegisterComponent],
	imports: [
		CommonModule,
		AuthenticationRoutingModule,
		ReactiveFormsModule,
		...carbonModules,
	],
})
export class AuthenticationModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([Login20]);
	}
}
