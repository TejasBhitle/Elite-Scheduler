import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../teams/teams';
import { EliteApi } from '../../providers/elite-api/elite-api';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  public tournaments:any =[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private loadingController: LoadingController) {
  }

  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: 'Fetching Tournaments...',
      //spinner: 'dots'
    });

    loader.present().then(() => {
        this.eliteApi.getTournaments().then(data => {
          this.tournaments = data
          loader.dismiss();
        });
    })

  }

  OnItemTapped($event,item){
    this.navCtrl.push(TeamsPage,item);
  }

}
