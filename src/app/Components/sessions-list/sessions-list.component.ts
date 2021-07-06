import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/Services/auth.service';
import { ClassroomService } from 'src/services/classroom.service';
import { SessionListService } from '../../../services/session-list.service';
import { Session } from '../session-item/Session';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit {
  sessions:Session[];
  subscriber;
  constructor(
    private sessionListService:SessionListService, 
    private classroomService : ClassroomService, 
    public sessionService : AuthService) { }

  ngOnInit(): void {
    this.classroomService.getById(this.classroomService.classroomId).subscribe(
      (data) => {
        data['classroom']['sessions']
        .map(id => this.sessionListService.getAllsessions(id)
        .subscribe((session) => {
          this.sessionService.sessionList.push(session['Session']);                  
        }))
      }
    )
    // this.subscriber = this.sessionListService.getAllsessions(this.classroomService.classroomId).subscribe(data=>{
    //   this.sessions= data.Sessions;
    //   this.SessionList =this.sessions.slice();
    //   console.log(this.sessions);

    // },(err)=>{
    //   console.log(err);
    // })
  }


}
