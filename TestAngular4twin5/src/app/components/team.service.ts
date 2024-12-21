import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { team } from '../Models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  
  private postUrl = 'http://localhost:3000/teams';  

  constructor(private http: HttpClient) { }

  getTeams(): Observable<team[]> {
    return this.http.get<team[]>(this.postUrl);
  }


  

  addTeam(newTeam: team): Observable<team> {
    return this.http.post<team>(this.postUrl, newTeam);
  }
}


