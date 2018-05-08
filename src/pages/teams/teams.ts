import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
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
    private eliteApi: EliteApi,
    private loadingController: LoadingController) {
    this.tournament = navParams.data;
    console.log(this.tournament.id);
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Fetching Teams...'
    })

    loader.present().then(() => {
      this.eliteApi.getTeams(this.tournament.id)
        .subscribe( teams => {
          this.teams = teams
          loader.dismiss()
        });
    })

  }

  OnItemTapped($event, team){
    this.navCtrl.push(TeamHomePage,team)
  }

}
