import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/services/classroom.service';

@Component({
  selector: 'app-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.css']
})
export class ClassRoomComponent implements OnInit {
  classroomId : string;
  classroom : any;
  constructor(private route: ActivatedRoute, private classroomService : ClassroomService) { }

 
  ngOnInit(): void {
    this.classroomService.classroomId = this.classroomId = this.route.snapshot.paramMap.get('id');
    this.classroomService.getById(this.classroomId).subscribe((data)=>{this.classroom = data['classroom']})
  }

  navBarOpen : boolean = false;

  toggleNavbar(){
    this.navBarOpen = !this.navBarOpen;
  }
}
