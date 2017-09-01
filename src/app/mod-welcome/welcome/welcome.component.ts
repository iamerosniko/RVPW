import { Component, OnInit } from '@angular/core';
import { TempUser,Leader,Team,Resource } from '../../com_entities/workplace-entities';
import { Headers, Http } from '@angular/http';
import { ApiService } from '../../com_services/workplace-services/api-service';
import { AppSettings } from '../../com_entities/app-settings';

import { Router }  from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
  teams:Team[]=[];
  leaders:Leader[]=[];
  tempuser:TempUser=new TempUser(0,"","","",0,"",0,0,true);
  resource:Resource[]=[];
  constructor(
    private apiService:ApiService,
    private router: Router
  ) { 
  }

  ngOnInit() {
    this.getDependencies();

  }

  async getDependencies(){
    this.leaders=<Leader[]>await this.getAll('Leaders');
    this.teams=<Team[]>await this.getAll('Teams');
    this.resource=<Resource[]>await this.getAll('Resources');
  }

  //where controller is the name of controller in api
  async getAll(controller:string){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.getAll();
    return new Promise<any[]>((resolve)=> resolve(result));
  }

  async postData(controller:string,data:any){
    this.apiService.apiUrl=AppSettings.GETAPIURL(controller);
    var result=await this.apiService.postData(data);
    return new Promise<any>((resolve)=> resolve(result));
  }

  async submit(){
    if(this.tempuser.FirstName=="" ||
    this.tempuser.LastName=="" ||
    this.tempuser.TeamID==""||
    this.tempuser.LeaderID==0){
      alert("Some fields are not supplied.")
    }
    else{
      this.tempuser=<TempUser> await this.postData('TemporaryUsers',this.tempuser);
      // await console.log(this.tempuser);
      sessionStorage.setItem('user',JSON.stringify(this.tempuser));
      this.routeToPath('workplace');
    }
  }

  routeToPath(path:string){
    this.router.navigate(['/'+path]);
  }

  async getResources(){
    var leader = this.leaders.find(x=>x.LeaderID==this.tempuser.LeaderID);
    var leaderResourceID = leader.LeaderResourceID;
    var managerResourceID = leader.ManagerResourceID;
    var leaderResource = this.resource.find(x=>x.ResourceID==leaderResourceID);
    var managerResource = this.resource.find(x=>x.ResourceID==managerResourceID);
    sessionStorage.setItem('leader-video',leaderResource.ResourcePath==null?null:leaderResource.ResourcePath);
    sessionStorage.setItem('manager-video',managerResource.ResourcePath==null?null:managerResource.ResourcePath);
  }
}
