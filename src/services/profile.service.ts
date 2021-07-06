import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, Subject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class profile { 
    // token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGI0NzAxODUyZTA3MDAyMjM2ZTViOSIsInJvbGUiOiJJbnN0cnVjdG9yIiwiaWF0IjoxNjI1MDYzNzk5fQ.EKbBmFueU6zPBMs-grusiHdsEJQsJim8tI-dDNffB-c";

    error = new Subject();
    profile = new Subject();


    constructor(private myClient: HttpClient, private router: Router) {
    }

    private profileUrl: string = "https://codemodo-backend.herokuapp.com/api/instructor/profile"
   
    getProfile(id : string) {
        
        this.myClient.get(this.profileUrl + '/' + id, { headers: { authorization: this.getToken() } }).subscribe(res => {
            console.log(res)
            this.profile.next(res)

        }, err => {
            console.log(err)
            this.error.next(err)
        })
    }

    getToken() {
        const token = localStorage.getItem("Token");
        if (token == null) {
            return ' ';
        }
        else {
            console.log(token)
            return token;
        }
    }

   
    getId() {
        const Id = localStorage.getItem("id");
        if (Id == null) {
            return ' ';
        }
        else {
            return Id;
        }
    }



}