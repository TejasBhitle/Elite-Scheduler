import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EliteApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EliteApi {

  private baseURl = "https://elite-scheduler-ionic2.firebaseio.com";

  constructor(public http: HttpClient) {
  }

}
