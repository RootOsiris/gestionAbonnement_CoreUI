import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Users } from '../modeles/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseUrl:string='http://localhost:8888/api';
private user = new Users();
  constructor(private http: HttpClient) { }

  login(login: string, mdp: string) {
   
    this.user.login=login; this.user.mdp=mdp;
    return this.http.post<any>(this.baseUrl+'/users/login',this.user)
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}

}
