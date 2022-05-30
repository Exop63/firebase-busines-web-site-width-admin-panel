import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  get Email(): FormControl { return this.form.get('email') as FormControl; }
  get Password(): FormControl { return this.form.get('password') as FormControl; }
  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.InitForm();
  }
  InitForm(): void {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  async Login(): Promise<void> {
    console.log("Try Login");
    if (this.form.valid) {
      console.log("Form is valid");

      return await this.authService.AuthLogin(this.Email.value, this.Password.value);
    }
    console.log("Form is unvalid");

    return undefined;
  }

}
