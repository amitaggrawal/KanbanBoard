import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl = 'http://192.168.43.91:7000/login/api/login';
  baseurl1 = 'http://192.168.43.91:7000/get-project/api/get-projects';

  constructor(private http: HttpClient) { }


logUser(data){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
 
  return this.http.post(this.baseurl,data)

}

fetchProjects(data){
  const httpOption = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
    })
  };
  return this.http.post(this.baseurl1, data)
}
}
