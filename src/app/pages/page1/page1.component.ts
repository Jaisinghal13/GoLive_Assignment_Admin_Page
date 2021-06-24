import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIRequestService } from 'src/app/services/apirequest.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
data2;
date;
leagueAdditionId;
rd;
homeTeam;
awayTeam;
homeTeamScore;
awayTeamScore;
body_new = {
  "@class": ".LogEventRequest",
  "eventKey": "LeaugeTeamLBUpdate",
  "leagueId": "Sky Esports League-1617015905529",
  "leagueAdditionId": "Sky Esports League-1617015905529-2021-March-1617025320377",
  "homeTeamScore": 3,
  "awayTeamScore": 0,
  "matchStartTime": 1619244230000,
  "homeTeam": "Chennai Clutchers",
  "awayTeam": "Bengaluru Crushers",
  "matchId": "Sky Esports League-1617015905529-2021-March-1617025320377-Chennai Clutchers-1619244230000",
  "matchLink": "",
  "selectedByAwayTeam": [
    {
      "homeTeamScore": 13,
      "awayTeamScore": 5,
      "screenShot": "",
      "videoLink": "",
      "mapName": "ICEBOX"
    }
  ],
  "selectedByHomeTeam": [
    {
      "homeTeamScore": 13,
      "awayTeamScore": 10,
      "screenShot": "",
      "videoLink": "",
      "mapName": "HAVEN"
    },
    {
      "homeTeamScore": 13,
      "awayTeamScore": 8,
      "screenShot": "",
      "videoLink": "",
      "mapName": "ASCENT"
    }
  ],
  "homeTeamTieBreaker": 16,
  "awayTeamTieBreaker": -16,
  "playerId":"60378db593d80404f7a18234"

}
  constructor(private api:APIRequestService,public router:Router) {
    this.api.leagueTeamLeaderBoard().subscribe(data=>{
      console.log(data);
      this.data2=data;
      console.log(this.data2);
      this.date=this.data2.scriptData.data[2].when;
      this.date=this.date.substring(0,10);
      this.leagueAdditionId=this.data2.scriptData.data[2].leagueAdditionId;
      this.leagueAdditionId=this.leagueAdditionId.substring(0,18);
      this.rd=this.data2.scriptData.data[2].rd;
    })
    
   }

  ngOnInit(): void {
  }

  validinput(){
    if(this.awayTeam==this.body_new.awayTeam && this.homeTeam==this.body_new.homeTeam && this.homeTeamScore==this.body_new.homeTeamScore && this.awayTeamScore==this.body_new.awayTeamScore){
      this.router.navigateByUrl('/page2');
    }else{
      alert("Wrong value insert");
    }
  }

}
