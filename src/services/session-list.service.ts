import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../app/Components/session-item/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionListService {
  // newObservable:Observable<Array<Session>>;
  private baseUrl:string= "https://codemodo-backend.herokuapp.com/api/session/";

  constructor(private httpClient:HttpClient) { }

  getAllsessions(id: string){
    return this.httpClient.get<{Sessions:Session[]}>(this.baseUrl + id);
  }

 
}
