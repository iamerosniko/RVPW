import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AppSettings } from '../../com_entities/app-settings';
@Injectable()
export class ApiService {
    private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin' : 'http://localhost:4200'});
    private apiUrl = '';
    
    
    constructor(private controller:string,private http: Http){
        this.apiUrl=AppSettings.GETAPIURL(controller); 
        
    }

    getAll(): Promise<any[]> {
        console.log('here')
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }

    getOne(): Promise<any>{
        return this.http
            .get(this.apiUrl, {headers: this.headers})
            .toPromise()
            .then(response => response.json())
            .catch(AppSettings.handleError);
    }  

    postData(entity:any): Promise<any>{
        return this.http
          .post(this.apiUrl, JSON.stringify(entity), {headers: this.headers})
          .toPromise()
          .then(res => res.json())
          .catch(AppSettings.handleError);
    }

    putData(entity:any,ID:string):Promise<any>{
        const url = `${this.apiUrl}/${ID}`;
        return this.http
            .put(url, JSON.stringify(entity), {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }

    deleteData(ID:string):Promise<any>{
        const url = `${this.apiUrl}/${ID}`;
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(AppSettings.handleError);
    }

}
