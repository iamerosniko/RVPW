import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-leader',
  templateUrl: './team-leader.component.html',
  styleUrls: ['./team-leader.component.css']
})
export class TeamLeaderComponent implements OnInit {

  constructor() { }
  breadcrumbs =['Leaders\' Video' ,'Team Leader'];
  path:string='';
  ngOnInit() {
    if(sessionStorage.getItem('workplace_leader-video')!=null){
      this.path=sessionStorage.getItem('workplace_leader-video');
    }
  }

}
