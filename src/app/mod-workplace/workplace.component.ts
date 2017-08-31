import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { TempUser } from '../com_entities/workplace-entities';
@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.css']
})
export class WorkplaceComponent implements OnInit {
  activeLink=1;
  currentUser:TempUser;
  constructor(private router: Router) { 
  }
  
  ngOnInit() {
    this.checkSession();
    this.updateActiveLink();
  }

  routeToPath(path:string){
    this.router.navigate(['/'+path]);
  }

  async updateActiveLink(){
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

  async checkSession(){
    var user = sessionStorage.getItem('user');
    console.log(user);
    if(user==null){
      await this.routeToPath('welcome');
    }
    else{
      this.currentUser=JSON.parse(user)
      console.log(this.currentUser);
    }
  }
}
