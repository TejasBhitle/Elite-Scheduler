import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../tournaments/tournaments';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  public favorites = [
    {coach:"James",division:"6th grade",id:812,name:"Baltimore Stars"},
    {coach:"James",division:"6th grade",id:812,name:"Baltimore Stars"}
]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToTournament(){
    this.navCtrl.push(TournamentsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
