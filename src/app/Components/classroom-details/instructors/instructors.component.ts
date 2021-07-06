import { Component, OnInit, Input } from '@angular/core';
import { ClassroomService } from 'src/services/classroom.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  Id: string;

  instructorList: any = [];

  constructor(private classroomService: ClassroomService) { }

  ngOnInit(): void {
    this.Id = this.classroomService.classroomId;
    this.classroomService.getById(this.Id).subscribe(
      (data) => {
        data['classroom']['instructors']
        .map(id => this.classroomService
        .getInstructors(id)
        .subscribe((instructor) => {
          this.instructorList.push(instructor['instructor'])          
        }))
      }
    )
  }

}
