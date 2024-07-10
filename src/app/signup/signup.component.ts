import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private http: HttpClient,private router:Router){}
  signupUsers:any[] = [];
  signupobj:any={
  userName: '',
  email:'',
  password: '',
  confirmPassword:''
  };
  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData!= null){
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp() 
  {
    if (!this.signupobj.userName || !this.signupobj.email || !this.signupobj.password || !this.signupobj.confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (this.signupobj.password !== this.signupobj.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const user = {
      userName: this.signupobj.userName,
      email: this.signupobj.email,
      password: this.signupobj.password
    };
  
    localStorage.setItem(this.signupobj.email, JSON.stringify(user));
    alert('Signup successful!');
  
  }

}
