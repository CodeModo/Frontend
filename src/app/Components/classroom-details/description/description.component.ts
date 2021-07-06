import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/services/classroom.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  classroom : any;
  Id : string;
  coursesList: any = [];

  constructor(private classroomService: ClassroomService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.Id = this.classroomService.classroomId;
       this.classroomService.getById(this.Id).subscribe((data) => {
         this.classroom = data['classroom'];
         data['classroom']['courses']
         .map(id => this.classroomService
         .getCourses(id)
         .subscribe((course) => {
           this.coursesList.push(course)    
         }))
       })
  }

}
