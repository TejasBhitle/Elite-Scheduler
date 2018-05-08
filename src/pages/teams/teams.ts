import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams : any;
  public tournament;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi) {
    this.tournament = navParams.data;
    console.log(this.tournament.id);
  }

  ionViewDidLoad() {
    this.eliteApi.getTeams(this.tournament.id)
      .subscribe( teams => this.teams = teams);
  }

  OnItemTapped($event, team){
    this.navCtrl.push(TeamHomePage,team)
  }

}
