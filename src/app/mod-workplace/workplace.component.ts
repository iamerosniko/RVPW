import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }  from '@angular/router';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {
  activeLink=1;
  constructor(private router: Router,ar:ActivatedRoute) { 
  }
  
  ngOnInit() {
    this.updateActiveLink();
  }

  routeToPath(path:string){
    this.router.navigate(['/'+path]);
  }

  updateActiveLink(){
    switch(this.router.url) { 
      case "/workplace/opt": { 
        //statements; 
        this.activeLink=16;
        break; 
      } 
      case "/workplace/house-rules": { 
        //statements; 
        this.activeLink=22;
        break; 
      }
      default: { 
        //statements; 
        break; 
      } 
    } 
  }
}
