import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
	public formGroup!: FormGroup;

	constructor(
		protected formBuilder: FormBuilder,
		private router: Router,
	) {}

	ngOnInit(): void {
		this.formGroup = this.formBuilder.group(
			{
				email: [
					"example@business.com",
					[Validators.required, Validators.email],
				],
				password: ["xYzXxXzY", Validators.required],
			},
			{ updateOn: "blur" },
		);
	}

	onSubmit() {
		this.formGroup.markAllAsTouched();
	}

	isValid(name: string) {
		const instance = this.formGroup.get(name);
		return instance!.invalid && (instance!.dirty || instance!.touched);
	}
}
