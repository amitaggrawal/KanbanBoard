import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  baseurl1 = 'http://163.122.226.35:3000/';

  constructor(private http: HttpClient) { }

  addFile(data) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    
    return this.http.post(this.baseurl1 + 'addFile', data).pipe(
      map((res) => {
        return res;
      })
    );

  }
}
