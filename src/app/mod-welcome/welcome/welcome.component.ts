import { Component, OnInit } from '@angular/core';
import { TempUser,Leader,Team } from '../../com_entities/workplace-entities';
import { Headers, Http } from '@angular/http';
import { ApiService } from '../../com_services/workplace-services/api-service';
import { AppSettings } from '../../com_entities/app-settings';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  teams:Team[]=[];
  leaders:Leader[]=[];
  tempuser:TempUser=new TempUser(0,"","","",0,"",0,0,true);

  constructor(
    private teamSvc:ApiService,
    private leaderSvc:ApiService,
    private tempUserSvc:ApiService

  ) { 
    teamSvc.apiUrl=AppSettings.GETAPIURL('Teams');
    leaderSvc.apiUrl=AppSettings.GETAPIURL('Leaders');
    tempUserSvc.apiUrl=AppSettings.GETAPIURL('TemporaryUsers');
  }

  ngOnInit() {
    this.getDependencies();

  }

  async getDependencies(){
    this.leaderSvc.getAll().then(a=>{
      console.log(
        a
      )
    }).catch(()=>{
      console.log('saf')
    })
    console.log(await this.leaderSvc.getAll());
  }
}
