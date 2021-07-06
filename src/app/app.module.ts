//* packages *//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


//* Components *//
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ClassroomDetailsComponent } from './Components/classroom-details/classroom-details.component';
import { SideMenuComponent } from './Components/classroom-details/sideMenu/sideMenu.component';
import { DescriptionComponent } from './Components/classroom-details/description/description.component';
import { StudentsComponent } from './Components/classroom-details/students/students.component';
import { InstructorsComponent } from './Components/classroom-details/instructors/instructors.component';
import { ScheduleComponent } from './Components/classroom-details/schedule/schedule.component';
import { ClassRoomComponent } from './Components/class-room/class-room.component';
import { SessionItemComponent } from './Components/session-item/session-item.component';
import { SessionsListComponent } from './Components/sessions-list/sessions-list.component';
import { SessionFormComponent } from './Components/session-form/session-form.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ClassroomService } from 'src/services/classroom.service';


//* routes definitions *//

const routes: Routes = [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'sessionForm', component: SessionFormComponent},
  {path:'instructor/:id', component: ProfileComponent},
  {path: 'classroom/:id', component:ClassRoomComponent,
  children:[
    { path: '', redirectTo: 'sessionList', pathMatch: 'full' },
    { path: 'sessionList', component: SessionsListComponent },
    {
      path: 'description', component: ClassroomDetailsComponent,
      children: [
        { path: '', redirectTo: 'details', pathMatch: 'full' },
        { path: 'details', component: DescriptionComponent },
        { path: 'schedule', component: ScheduleComponent },
        { path: 'instructors', component: InstructorsComponent },
        { path: 'students', component: StudentsComponent },
      ]
    }
  ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    ClassroomDetailsComponent,
    SideMenuComponent,
    DescriptionComponent,
    StudentsComponent,
    InstructorsComponent,
    ScheduleComponent,
    ClassRoomComponent,
    SessionItemComponent,
    SessionsListComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    SessionFormComponent
  ],
  imports: [

    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [ClassroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
