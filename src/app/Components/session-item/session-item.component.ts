import { Component, OnInit,Input } from '@angular/core';
import { ClassroomService } from 'src/services/classroom.service';
import { Session } from './Session';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})

export class SessionItemComponent implements OnInit {

  @Input() session:Session;
  instructor : any;
  commentsClicked : boolean = false;
  commentersName : any = [];

  constructor(private classroomService: ClassroomService) { }
  ngOnInit(): void {
      this.classroomService.getInstructors(this.session["instructorId"]).subscribe((data)=>{
        this.instructor = data['instructor'];
      });
      this.session['comments'].map(comment => this.classroomService
        .getCommenter(comment['_id'])
        .subscribe((commenter) => {
          console.log(commenter)
          this.commentersName.push(commenter['Commenter']['name']);          
        }))
  }

  commentToggle() {
    this.commentsClicked = !this.commentsClicked;
  }

  getCommenter(id: string){
    this.classroomService.getCommenter(id).subscribe((data)=>{
      return data['instructor']['name'];
    })
  }
}
