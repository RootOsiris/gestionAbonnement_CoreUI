import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Abonnements } from '../modeles/abonnements';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbonnementsService {

  private baseUrl:string='http://localhost:8888/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private abonnement = new Abonnements(); 

  constructor(private _http:HttpClient) { } 

  getAbonnements():Observable<Abonnements[]>{

    return this._http.get<Abonnements[]>(this.baseUrl+'/abonnements').map(map=>map);
}
  getAbonnement(id:number){ 

    return this._http.get<Abonnements>(this.baseUrl+'/abonnements/'+id).map(map=>map);
}
  deleteAbonnement(id:number){

    return this._http.delete(this.baseUrl+'/abonnements/'+id).map(map=>map);
}
  createAbonnement(abonnement:Abonnements){

    return this._http.post(this.baseUrl+'/abonnements',abonnement).map(map=>map);
}
   
   updateAbonnement(abonnement:Abonnements){

    return this._http.put(this.baseUrl+'/abonnements',abonnement).map(map=>map); 
}
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
}

}
