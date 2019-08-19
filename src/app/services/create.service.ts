import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  baseurl = 'http://192.168.43.91:7000/add-project/api/add-project'
  constructor(private http : HttpClient) { }

  createProjects(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
  };
  return this.http.post(this.baseurl,data)

}
}
