import { Component, OnInit } from '@angular/core';
import { ClassroomService } from 'src/services/classroom.service';
import { concatMap } from "rxjs/operators";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  Id : string;
  scheduleList : [];

  constructor(private classroomService : ClassroomService) { }

  ngOnInit(): void {
    this.Id = this.classroomService.classroomId;

    this.classroomService.getById(this.Id)
    .pipe(
      concatMap(
        (res: any)=> this.classroomService.getSchedule(res['classroom']['scheduleId'])))
    .subscribe((schedule: any)=>{
       this.scheduleList = schedule['sessions'];
    })
  }

}
