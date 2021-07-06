import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/services/classroom.service';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private AuthService:AuthService, private classroomService: ClassroomService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("submitting")
    this.AuthService.register(this.form, this.classroomService.classroomId).subscribe(
      data => {
        console.log(data);
        this.AuthService.sessionList.push(data['session']);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}