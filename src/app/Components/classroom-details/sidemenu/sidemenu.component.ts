import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from 'src/services/classroom.service';

@Component({
  selector: 'app-sideMenu',
  templateUrl: './sideMenu.component.html',
  styleUrls: ['./sideMenu.component.css']
})
export class SideMenuComponent implements OnInit, AfterViewInit {

  classroomId : string;
  constructor(private classroomService : ClassroomService, private route: ActivatedRoute) {}

  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.classroomId = this.classroomService.classroomId;
  }
}
