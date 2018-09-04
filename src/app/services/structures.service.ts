import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Structures } from '../modeles/structures';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StructuresService {

  private baseUrl:string='http://localhost:8888/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private structure = new Structures(); 

  constructor(private _http:HttpClient) { } 
  
  getStructures():Observable<Structures[]>{

    return this._http.get<Structures[]>(this.baseUrl+'/structures').map(map=>map);
}
  getStructure(id:number){ 

    return this._http.get<Structures>(this.baseUrl+'/structures/'+id).map(map=>map);
}
  deleteStructure(id:number){

    return this._http.delete(this.baseUrl+'/structures/'+id).map(map=>map);
}
  createStructure(structure:Structures){

    return this._http.post(this.baseUrl+'/structures',structure).map(map=>map);
}
   
   updateStructure(structure:Structures){

    return this._http.put(this.baseUrl+'/structures',structure).map(map=>map); 
}
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
}

}
