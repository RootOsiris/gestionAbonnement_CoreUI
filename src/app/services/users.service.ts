import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs';
import { Users } from '../modeles/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl:string='http://localhost:8888/api';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private user = new Users(); 

  constructor(private _http:HttpClient) { }  

  getUsers():Observable<Users[]>{

    return this._http.get<Users[]>(this.baseUrl+'/users').map(map=>map);
}
  getUser(id:number){ 

    return this._http.get<Users>(this.baseUrl+'/users/'+id).map(map=>map);
}
  deleteUser(id:number){

    return this._http.delete(this.baseUrl+'/users/'+id).map(map=>map);
}
  createUser(user:Users){

    return this._http.post(this.baseUrl+'/users',user).map(map=>map);
}
   
   updateUser(user:Users){

    return this._http.put(this.baseUrl+'/users',user).map(map=>map); 
}
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
}
 

}
