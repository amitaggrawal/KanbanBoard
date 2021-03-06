import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getSupportedInputTypes } from '@angular/cdk/platform';
import { Sprint } from './tasks';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SprintuploadService {
  baseUrl = 'http://192.168.43.91:7000/upload-artifacts/api/upload-sprint'
  baseUrl1 = "http://192.168.43.91:7000/upload-artifacts/api/upload-artifacts"
  baseUrl2 = 'http://192.168.43.91:7000/upload-artifacts/api/download-artifacts'
  baseUrl3 = 'http://192.168.43.91:7000/project/api/project'
  baseUrl4 = 'http://192.168.43.91:7000/sprint/api/getSprintById'
  baseUrl5 = 'http://192.168.43.91:7000/sprint/api/getProductBacklogById'
  baseUrl6 = 'http://192.168.43.91:7000/update-sprint/api/updateSprintById'

  constructor(private httpclient: HttpClient, private router:Router) { }

  private sprintData: Sprint;

  uploadSprintfile(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'applications/json'
      })
    };
    return this.httpclient.post(this.baseUrl, data)
  }

  uploadArtifactsFile(data) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'applications/json'
      })
    };
    return this.httpclient.post(this.baseUrl1, data)
  }

  downLoadArtifactsFile(data) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'applications/json'
      })
    };
    return this.httpclient.post(this.baseUrl2, data, {
      responseType: "blob",
      headers: new HttpHeaders().append("Content-Type", "application/json")
    })
  }

  newSprintDataAvailable = new Subject();

  getSprint(data) {
    // const httpOption = {
    //   headers: new HttpHeaders({
    //     'Content-type': 'application/json'
    //   })
    // };

    this.httpclient.post(this.baseUrl4, data).subscribe(res => {
      if (res != null && res != undefined) {
        this.sprintData = res.sprint;
        if (this.sprintData != null)
          localStorage.setItem('response', JSON.stringify(this.sprintData));
          this.router.navigate(['/kanban']);
          console.log('got new response emitting');
          this.newSprintDataAvailable.next();
      }
    });
  }



  fetchProjectByID(data) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.httpclient.post(this.baseUrl3, data)
  }

  getBacklog(data) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.httpclient.post(this.baseUrl5, data)
  }

  updateSprint(data) {
    return this.httpclient.post(this.baseUrl6, data)
  }
}


