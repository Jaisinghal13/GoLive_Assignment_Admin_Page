import { Component, OnInit } from '@angular/core';
import { APIRequestService } from 'src/app/services/apirequest.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  data2;
  date;
  leagueAdditionId;
  rd;
    constructor(private api:APIRequestService) {
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

}
