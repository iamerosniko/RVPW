import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  constructor() { }

  breadcrumbs =['Team Overview' ,'Team Org Chart'];
  slides:any;
  ngOnInit() {
  }

}
