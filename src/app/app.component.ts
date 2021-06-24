import { Component } from '@angular/core';
import { APIRequestService } from './services/apirequest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoLive';
  data2 ;
  constructor(private api:APIRequestService) {
     this.api.leaugeTeamLBUpdate().subscribe(data=>{
       console.log(data);
     })
     
     this.api.leagueTeamLeaderBoard().subscribe(data=>{
       console.log(data);
       this.data2=data;
       console.log(this.data2);
     })
    }
    
}
