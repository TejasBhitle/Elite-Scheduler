import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EliteApi {

  private baseURl = "https://elite-scheduler-ionic2.firebaseio.com";

  constructor(public http: Http) {
  }

  getTournaments(){
    return new Promise((resolve) => {
      this.http.get(`${this.baseURl}/tournaments.json`)
      .subscribe(response => resolve(JSON.parse(response['_body'])))
    })
  }

  getTeams(id){
    return this.http.get(`${this.baseURl}/tournaments-data/${id}/teams.json`)
      .map(response => {
        return JSON.parse(response['_body'])
      })
  }

  getGames(id){
    id = "3dd50aaf-6b03-4497-b074-d81703f07ee8" //temp
    return this.http.get(`${this.baseURl}/tournaments-data/${id}/games.json`)
      .map(response => {
        return JSON.parse(response['_body'])
      })
  }

}
