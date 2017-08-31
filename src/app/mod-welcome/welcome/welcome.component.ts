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
    private apiService:ApiService
  ) { 
  }

  ngOnInit() {
    this.getDependencies();

  }

  async getDependencies(){
    this.leaders=<Leader[]>await this.getAll('Leaders');
    this.teams=<Team[]>await this.getAll('Teams');
  }

  async getAll(controller:string){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.getAll()
    return new Promise<any[]>((resolve)=> resolve(result));
  }
  
}
