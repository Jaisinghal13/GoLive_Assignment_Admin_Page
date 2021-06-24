import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIRequestService } from 'src/app/services/apirequest.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  data2;
  date;
  final_data;
  leagueAdditionId;
  rd;
  homeTeamScore1;
  awayTeamScore1;
  homeTeamScore2;
  awayTeamScore2;
  homeTeamScore3;
  awayTeamScore3;
  mapName1;
  mapName2;
  mapName3;
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
    console.log(this.awayTeamScore1);
    console.log(this.awayTeamScore2);
    console.log(this.awayTeamScore3);
    console.log(this.homeTeamScore1);
    console.log(this.homeTeamScore2);
    console.log(this.homeTeamScore3);
    console.log(this.mapName1);
    console.log(this.mapName2);
    console.log(this.mapName3);
    console.log(this.body_new.selectedByAwayTeam[0].awayTeamScore);
    console.log(this.body_new.selectedByAwayTeam[0].homeTeamScore);
    console.log(this.body_new.selectedByHomeTeam[0].homeTeamScore);
    console.log(this.body_new.selectedByHomeTeam[0].awayTeamScore );
    console.log(this.body_new.selectedByHomeTeam[1].homeTeamScore);
    console.log(this.body_new.selectedByHomeTeam[1].awayTeamScore);
    console.log(this.body_new.selectedByAwayTeam[0].mapName);
    console.log(this.body_new.selectedByHomeTeam[0].mapName);
    console.log(this.body_new.selectedByHomeTeam[1].mapName);
    if(this.awayTeamScore1==this.body_new.selectedByAwayTeam[0].awayTeamScore
       && this.homeTeamScore1==this.body_new.selectedByAwayTeam[0].homeTeamScore
        && this.homeTeamScore2==this.body_new.selectedByHomeTeam[0].homeTeamScore
         && this.awayTeamScore2==this.body_new.selectedByHomeTeam[0].awayTeamScore 
         &&this.homeTeamScore3==this.body_new.selectedByHomeTeam[1].homeTeamScore 
         && this.awayTeamScore3==this.body_new.selectedByHomeTeam[1].awayTeamScore
         && this.mapName1==this.body_new.selectedByAwayTeam[0].mapName
         && this .mapName2==this.body_new.selectedByHomeTeam[0].mapName
         && this.mapName3==this.body_new.selectedByHomeTeam[1].mapName ){
           this.api.leaugeTeamLBUpdate().subscribe(data=>{
             console.log(data);
             this.final_data=data;
             alert(this.final_data.scriptData.message);
           })
      this.router.navigateByUrl('/page3');
    }else{
      alert("Wrong value insert");
    }
  }


}
