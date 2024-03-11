import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";

// carbon-components-angular default imports
import {
	IconModule,
	IconService,
	ThemeModule,
	UIShellModule,
} from "carbon-components-angular";

// Icons
import Notification20 from "@carbon/icons/es/notification/20";
import UserAvatar20 from "@carbon/icons/es/user--avatar/20";

@NgModule({
	declarations: [HeaderComponent],
	imports: [CommonModule, UIShellModule, IconModule, ThemeModule],
	exports: [HeaderComponent],
})
export class HeaderModule {
	constructor(protected iconService: IconService) {
		iconService.registerAll([Notification20, UserAvatar20]);
	}
}
