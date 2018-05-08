import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../providers/elite-api/elite-api';
import * as _ from 'lodash';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  public teams : any;
  private allteams : any;
  private allteamDivisions : any;
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
        .subscribe( data => {
          this.allteams = data;
          console.log(this.allteams);

          this.allteamDivisions =
            _.chain(data)
            .groupBy('division')
            .toPairs()
            .map( item => _.zipObject(['divisionName','divisionTeams'],item))
            .value()

          this.teams = data;
          console.log(this.teams);
          loader.dismiss()
        });
    })

  }

  OnItemTapped($event, team){
    this.navCtrl.push(TeamHomePage,team)
  }

}
