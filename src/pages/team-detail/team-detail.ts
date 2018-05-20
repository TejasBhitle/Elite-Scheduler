import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EliteApi } from '../../providers/elite-api/elite-api';

import * as _ from 'lodash';

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  public team: any = {}
  public games: any = []
  //public teamStanding: any = {}
  private tourneyData: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApi: EliteApi,
    private loadingController: LoadingController) {
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Fetching information'
    })

    loader.present().then(() => {
      this.eliteApi.getGames(this.team.id).subscribe(
        games => {
          this.games = _.chain(games)
              .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
              .map(g => {
                let isTeam1 = (g.team1Id == this.team.id);
                let opponentName = isTeam1 ? g.team2: g.team1;
                let scoreDisplay = this.getScoreDisplay(isTeam1,g.team1Score, g.team2Score);
                return {
                  gameId: g.id,
                  opponent: opponentName,
                  time: Date.parse(g.time),
                  location: g.location,
                  locationUrl: g.locationUrl,
                  scoreDisplay: scoreDisplay,
                  homeAway: (isTeam1 ? "vs": "at")
                };
              }).value()
            //this.teamStanding = _.find(games.standings,{ 'teamId': this.team.id});
            loader.dismiss()
        })
    })

  }

  getScoreDisplay(isTeam1, team1Score, team2Score){
    if(team1Score && team2Score){
      var teamScore = (isTeam1 ? team1Score: team2Score);
      var opponentScore = (isTeam1 ? team2Score: team1Score);
      var winIndicator = teamScore > opponentScore ? "W: ":"L :";
      return winIndicator + teamScore + "-" + opponentScore;
    }
  }

}
