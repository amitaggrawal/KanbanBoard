import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  baseurl = 'http://163.122.226.44:3000/register/api/register';

  constructor(private http: HttpClient) { }


addMember(data){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
 
  return this.http.post(this.baseurl,data)

}

}
