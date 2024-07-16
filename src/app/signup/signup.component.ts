import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public signUpForm !: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: [""],
      password: [""]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signupUser",this.signUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
      this.signUpForm.reset()
      this.router.navigate(["login"])
    },err=>{
      alert("Something went wrong")
    })
  }

  // signupForm: FormGroup;
  // submitted = false;

  // constructor(private formBuilder: FormBuilder) {
  //   this.signupForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]],
  //     confirmPassword: ['', [Validators.required]]
  //   }, {
  //     validator: this.mustMatch('password', 'confirmPassword')
  //   });
  // }

  // get f() {
  //   return this.signupForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.signupForm.invalid) {
  //     return;
  //   }
  // }

  // mustMatch(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     const control = formGroup.controls[password];
  //     const matchingControl = formGroup.controls[confirmPassword];

  //     if (matchingControl.errors && !matchingControl.errors['mismatch']) {
  //       return;
  //     }

  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ mismatch: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }
}
