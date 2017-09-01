import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Leaders\' Video' ,'Manager'];
  path:string='';
  ngOnInit() {
    if(sessionStorage.getItem('workplace_manager-video')!=null){
      this.path=sessionStorage.getItem('workplace_manager-video');
    }
  }

}
