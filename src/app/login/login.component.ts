import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Adjust the path as per your project structure
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUser")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        // this.loginForm.reset()
      this.router.navigate(["/home"])
      }else{
        alert("user not found") 
      }
    },err=>{
      alert("Something went wrong")
    })
  }

  // loginForm: FormGroup;
  // submitted = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private authService: AuthService,
  //   private router: Router
  // ) {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(8)]]
  //   });
  // }

  // get f() {
  //   return this.loginForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   localStorage.setItem('token', 'your-auth-token');

  //   // Redirect to home page
  //   this.router.navigate(['/home']);
  // }
}
