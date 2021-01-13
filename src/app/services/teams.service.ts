import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { League } from '../models/league.interface';
import { Team } from '../models/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  baseUrl: string = 'https://api.football-data.org/v2';
  laLigaCode: string = '2014'; //2014 - La Liga Santander

  httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': '3c3e532bd03d492ab1702d21abc1081c'
    })
  };
  
  constructor(private http: HttpClient) {}

  getLeagueTeams(): Observable<Team[]> {
    const url = `${this.baseUrl}/competitions/${this.laLigaCode}/teams`;
    return this.http.get<League>(url, this.httpOptions)
      .pipe(
        map((league) => league.teams),
        catchError(this.handleError<Team[]>('getLeagueTeams', []))
      );
  }

  getTeamById(id: string): Observable<Team> {
    const url = `${this.baseUrl}/teams/${id}` 
    return this.http.get<Team>(url, this.httpOptions)
      .pipe(
        tap(_ => console.log(`fetched Team id=${id}`)),
        catchError(this.handleError<Team>(`getTeamById id=${id}`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
