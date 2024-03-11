import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		loadChildren: () =>
			import("./starter-home/starter-home.module").then(
				(m) => m.StarterHomeModule,
			),
	},
	{
		path: "auth",
		loadChildren: () =>
			import("./features/authentication/authentication.module").then(
				(m) => m.AuthenticationModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
