import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: string = '';
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private authService : AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
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

    const email = this.loginForm.value['email'];
    const password = this.loginForm.value['password'];
    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      this.loginError = 'User not found.';
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.password !== password) {
      this.loginError = 'Incorrect password.';
      return;
    }

    localStorage.setItem('loginData', JSON.stringify(this.loginForm.value));
    alert('Login successful!');
    this.authService.login();
    this.router.navigate(['home']);
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
