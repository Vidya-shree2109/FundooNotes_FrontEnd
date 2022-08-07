import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
    });
  }
  ForgetPassword() {
    console.log("filled data", this.forgetPasswordForm.value);
  }
}