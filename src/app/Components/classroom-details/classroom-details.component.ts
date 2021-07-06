import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/services/classroom.service';


@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.css']
})
export class ClassroomDetailsComponent implements OnInit {
classroomId : string;
  constructor(private classroomService : ClassroomService, private route: ActivatedRoute) {

  }
  
  ngOnInit(): void {
    this.classroomId = this.classroomService.classroomId;
  }

}
