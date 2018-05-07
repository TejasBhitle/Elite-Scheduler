import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams :any = [
    {id : 1, name : "MI"},
    {id : 2, name : "RCB"},
    {id : 3, name : "KKR"},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  OnItemTapped($event, team){
    this.navCtrl.push(TeamDetailPage,team)
  }

}
