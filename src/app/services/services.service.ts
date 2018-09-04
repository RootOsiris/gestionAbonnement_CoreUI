import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Services } from '../modeles/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl:string='http://localhost:8888/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private service = new Services(); 

  constructor(private _http:HttpClient) { } 

  getServices():Observable<Services[]>{

    return this._http.get<Services[]>(this.baseUrl+'/services').map(map=>map);
}
  getService(id:number){ 

    return this._http.get<Services>(this.baseUrl+'/services/'+id).map(map=>map);
}
  deleteService(id:number){

    return this._http.delete(this.baseUrl+'/services/'+id).map(map=>map);
}
  createService(service:Services){

    return this._http.post(this.baseUrl+'/services',service).map(map=>map);
}
   
   updateService(service:Services){

    return this._http.put(this.baseUrl+'/services',service).map(map=>map); 
}
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
}

}
