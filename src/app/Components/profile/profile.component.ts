import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { profile } from '../../../services/profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myProfile : Subscription;
  errorSub :Subscription;
  instructor={
    name :"",
    achievements :[],
    email :"",
    phone:"",
    specialization:"",
  }
  constructor(private myService :profile, private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.myService.getProfile(this.route.snapshot.paramMap.get('id'))
    this.myProfile=this.myService.profile.subscribe(res=>{
     console.log(res)
     this.instructor=res["instructor"]
      console.log(this.instructor.achievements[0])
      
      
    })
    this.errorSub= this.myService.error.subscribe(err=>{
     
      console.log(err);
    });
  }

  navBarOpen : boolean = false;

  toggleNavbar(){
    this.navBarOpen = !this.navBarOpen;
  }

}
