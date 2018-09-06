import { Injectable } from '@angular/core';

import { Observable } from "rxjs/Observable";
import { Users } from '../modeles/users';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Http ,Response, Headers, ResponseOptions} from '@angular/http';


@Injectable()
export class UsersService {

  private baseUrl:string='http://localhost:8888/api';
  private headers= new Headers({'content-type':'application/json'});
  private options = new ResponseOptions({headers:this.headers});

  constructor(private _http:Http) { }  

  getUsers(){
    return this._http.get(this.baseUrl+"/users",this.options).map((response: Response)=> response.json())
    .catch(this.errorHandler);
  }
 
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
}
 

}
