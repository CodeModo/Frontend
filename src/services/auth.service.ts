import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClassroomService } from './classroom.service';

//const AUTH_API = 'http://localhost:3000/api/Session';
const AUTH_API = 'https://codemodo-backend.herokuapp.com/api/Session';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sessionList : any = [];
  //signedIn: Observable<boolean>;
  constructor(private http: HttpClient, private classroomService: ClassroomService) {
    //this.signedIn = new Observable();
  }

  // login(credentials): Observable<any> {
  //   return this.http.post(AUTH_API, {
  //     username: credentials.username,
  //     password: credentials.password
  //   }, httpOptions);
  // }
  // getSignedIn() {
  //   return this.signedIn;
  // }

  getToken() {
    const token = localStorage.getItem("Token");
    if (token == null) {
        return ' ';
    }
    else {
        return token;
    }
}

  register(session, classroomId): Observable<any> {
    return this.http.post(AUTH_API + "/" + classroomId, {
      title: session.title,
      description: session.description,
      meetingUrl: session.meetingUrl
    },  {headers:{Authorization: this.getToken()}});
  }
}