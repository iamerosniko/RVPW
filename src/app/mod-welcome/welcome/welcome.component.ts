import { Component, OnInit } from '@angular/core';
import { TempUser,Leader,Team } from '../../com_entities/workplace-entities';
import { ApiService } from '../../com_services/workplace-services/api-service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  teams:Team[]=[];
  leaders:Leader[]=[];
  tempuser:TempUser=new TempUser(0,"","","",0,"",0,0,true);

  teamSvc:ApiService=new ApiService('Teams');
  leaderSvc:ApiService=new ApiService('Leaders');
  tempUserSvc:ApiService=new ApiService('TemporaryUsers');
  constructor(
  ) { }
  
  ngOnInit() {
  }

}
