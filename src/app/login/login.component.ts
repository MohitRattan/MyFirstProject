// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
// import { SignupService } from '../signup.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   submitted = false;
//   loginError: string | null = null;

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService,
//     private router: Router,
//     private Sign : SignupService
//   ) {
//     this.loginForm = this.formBuilder.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }

//   ngOnInit(): void {}

//   get formControls() {
//     return this.loginForm.controls;
//   }

//   onSubmit() {
//     this.submitted = true;

//     if (this.loginForm.invalid) {
//       return;
//     }

//     const { email, password } = this.loginForm.value;
//     this.authService.login(email, password).subscribe(
//       success => {
//         if (success) {
//           this.router.navigate(['/']);
//         } else {
//           this.loginError = 'Invalid email or password';
//         }
//       },
//       error => {
//         this.loginError = 'An error occurred. Please try again later.';
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loginError: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private signupService: SignupService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // Example of using both AuthService and SignupService

  
    this.authService.login(email, password).subscribe(
      success => {
        if (success) {
          this.router.navigate(['/']);
        } else {
          // If login with AuthService fails, attempt with SignupService (assuming it's for different purposes)
          this.signupService.loginUser(email, password).subscribe(
            (response) => {
              debugger;
              this.authService.isLoggedIn
              if (response.success) {
                this.router.navigate(['/home']);
              } else {
                this.loginError = 'Invalid email or password';
              }
            },
            error => {
              this.loginError = 'An error occurred. Please try again later.';
            }
          );
        }
      },
      error => {
        // Handle AuthService login error
        // Optionally, you could try the SignupService login here as well
        this.loginError = 'An error occurred. Please try again later.';
      }
    );
  }
}

