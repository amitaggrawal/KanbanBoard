import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { RegisterComponent } from '../Authentication/Registration/register/register.component';

@Injectable({
  providedIn: 'root'
})




export class RegisterService {

  baseurl1 = 'http://192.168.43.91:7000/register/api/register';

  constructor(private http: HttpClient) { }


addRegister(data){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
 
  return this.http.post(this.baseurl1, data)

}
}