import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import{environment} from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError = "";
  email ="";
  password ="";
  userType ="";
  emailError = "";
  passwordError = "";
  constructor(private http:HttpClient, private router: Router ) { 
    
  }

  ngOnInit(): void {

  }
  login(event){
    event.preventDefault();
    // If user is student 
    if(this.userType === "student"){

      //Student
      console.log("student");
      this.http.post(environment.api+'/api/student/login',{username:this.email,password:this.password})
      .subscribe(  (res : any) =>{
        this.emailError = this.passwordError = this.email = this.password = "";
        localStorage.setItem("Token",res.token);
        //Go to Student Home page
      }
      ,
      err=>{
        if(err.status == 401) {this.emailError = "Incorrect username !" ; this.passwordError = ""};
        if(err.status == 402) {this.passwordError = "Incorrect password !"; this.emailError = ""};
      })

    }
    // If user is parent 
    else if(this.userType === "parent"){
      //Parent
      console.log("parent");
      this.http.post(environment.api+'/api/parent/login',{Email:this.email,Password:this.password})
      .subscribe(  (res : any) =>{
        this.emailError = this.passwordError = this.email = this.password = "";
        localStorage.setItem("Token",res.token);
        //Go to parent Home page
        console.log(res.token);
      }
      ,
      err=>{
        if(err.status == 401) {this.emailError = "Incorrect username !" ; this.passwordError = ""};
        if(err.status == 402) {this.passwordError = "Incorrect password !"; this.emailError = ""};
      })

    }
    // If user is instructor 
    else if(this.userType == "instructor"){
      console.log("instructor");
      this.http.post(environment.api+'/api/instructor/login',{name:this.email,password:this.password})
      .subscribe(  (res : any) =>{
        this.emailError = this.passwordError = this.email = this.password = "";
        localStorage.setItem("Token",res.token);
        //Go to Instructor Home page
        console.log(res.token);
        this.router.navigate(['instructor', res.id]);
      }
      ,
      err=>{
        if(err.status == 401) {this.emailError = "Incorrect username !" ; this.passwordError = ""};
        if(err.status == 402) {this.passwordError = "Incorrect password !"; this.emailError = ""};
      })
    }
  }
  

}
