import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIRequestService {

  constructor(private http:HttpClient) 
  {
    
  }
  leaugeTeamLBUpdate(){
   // const adminId = "60378db593d80404f7a18234";
   const body_new = {
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
    const body = {
      "@class": ".LogEventRequest",
      "eventKey": "LeaugeTeamLBUpdate",
      "leagueId": "Sky Esports League-1617165350190",
      "leagueAdditionId": "Sky Esports League-1617165350190-March-2021-1617165492876",
      "homeTeamScore": 3,
      "awayTeamScore": 0,
      "matchStartTime": 1619877600000,
      "homeTeam": "Kolkata Tridents",
      "awayTeam": "Punjab Pinnacles",
      "matchId": "Sky Esports League-1617165350190-March-2021-1617165492876-Kolkata Tridents-1619877600000",
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
      "playerId": "60378db593d80404f7a18234"
    }

    return this.http.post('https://h391398vkuek.preview.gamesparks.net/rs/debug/UZVkxRGqK5ewFbmMrEg2yuseepqcm5Tf/LogEventRequest',body_new);
  }

  leagueTeamLeaderBoard(){
    var eventClass = ".LogEventRequest";
    var leaderboardShortCode = "LeagueTeamLB.leagueAdditionId.Sky Esports League-1617015905529-2021-March-1617025320377" ;
    var playerId = "60c8c21f2a2d9c2e1ca0cf83";
    const body = {
      "@class": eventClass,
      "eventKey": "LeagueTeamLeaderBoard",
      "entryCount": "8",
      "leaderboardShortCode": leaderboardShortCode,
      "playerId": playerId
    }
    return this.http.post('https://h391398vkuek.preview.gamesparks.net/rs/debug/UZVkxRGqK5ewFbmMrEg2yuseepqcm5Tf/LogEventRequest',body);
  }
}
