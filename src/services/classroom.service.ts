import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseURL = 'https://codemodo-backend.herokuapp.com/api/classroom/';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  classroomId : string;
  studentOClassroom: any;
  //token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGI0NzAxODUyZTA3MDAyMjM2ZTViOSIsInJvbGUiOiJJbnN0cnVjdG9yIiwiaWF0IjoxNjI1MDYzNzk5fQ.EKbBmFueU6zPBMs-grusiHdsEJQsJim8tI-dDNffB-c";
  
  getToken() {
    const token = localStorage.getItem("Token");
    if (token == null) {
        return ' ';
    }
    else {
      console.log(token)
        return token;
    }
}

  constructor(private http: HttpClient) {}

  getById(id: string ){
    return this.http.get(baseURL + id)
  }

  getStudents(id: string ) {
    return this.http.get(baseURL + 'studentOfClassroom/' + id);
  }

  getInstructors(id: string){
    return this.http.get('https://codemodo-backend.herokuapp.com/api/instructor/profile/'+ id,
    {headers:{Authorization: this.getToken()}});
  }

  getSchedule(id: string){
    return this.http.get('https://codemodo-backend.herokuapp.com/api/schedule/' + id);
  }

  getCourses(id: string){
    return this.http.get('https://codemodo-backend.herokuapp.com/api/course/' + id);
  }

  getCommenter(id: string){
    return this.http.get('https://codemodo-backend.herokuapp.com/api/comment/commenter/' + id);
  }
}
