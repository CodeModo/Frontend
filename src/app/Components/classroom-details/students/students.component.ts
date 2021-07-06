import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService } from '../../../../services/classroom.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  Id : string;
  studentList: any;
  constructor(private classroomService: ClassroomService, private route: ActivatedRoute) {
   }
  ngOnInit(): void {
    this.Id = this.classroomService.classroomId;
    this.classroomService.getStudents(this.Id).subscribe((students) => 
    {
      this.studentList = students;
    });
  }

}
