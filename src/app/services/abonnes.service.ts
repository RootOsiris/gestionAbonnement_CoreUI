import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Abonnes } from '../modeles/abonnes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AbonnesService {

  private baseUrl:string='http://localhost:8888/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private abonne = new Abonnes(); 

  constructor(private _http:HttpClient) { } 

  getAbonnes():Observable<Abonnes[]>{

    return this._http.get<Abonnes[]>(this.baseUrl+'/abonnes').map(map=>map);
}
  getAbonne(id:number){ 

    return this._http.get<Abonnes>(this.baseUrl+'/abonnes/'+id).map(map=>map);
}
  deleteAbonne(id:number){

    return this._http.delete(this.baseUrl+'/abonnes/'+id).map(map=>map);
}
  createAbonne(abonne:Abonnes){

    return this._http.post(this.baseUrl+'/abonnes',abonne).map(map=>map);
}
   
   updateAbonne(abonne:Abonnes){

    return this._http.put(this.baseUrl+'/abonnes',abonne).map(map=>map); 
}
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
}

}
