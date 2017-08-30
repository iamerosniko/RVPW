import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {

  constructor(private router: Router) { }
  activeLink:number=1;
  ngOnInit() {
  }

  routeToPath(path:string){
    this.router.navigate(['/'+path]);
  }
}
