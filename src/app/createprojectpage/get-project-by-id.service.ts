import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants, LocalStorageKey } from '../constants/constants';
import { ProjectDetail } from '../shared/model/project-detail';
import { HelperUtil } from '../shared/helper.util';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    "providedIn" : "root"
})
export default class GetProjectByIdService {

    private getProjectByIdURL = Constants.baseURLLocal + Constants.getProjectByIdAPIEndPoint;

    private project: ProjectDetail;
    projectDetailsAvailable$ = new Subject();

    constructor(private _httpClient: HttpClient, private _router:Router) { }

    getProjectDetails(projectId: string){
        this._httpClient.post<ProjectDetail>(this.getProjectByIdURL, {projectId}).subscribe(data => {
            this.project = data;
            if(this.project.status){
                this.afterSuccessfulFetch();
            }
        });
    }

    private afterSuccessfulFetch(){
        HelperUtil.storeInLocalStorage(LocalStorageKey.projectDetails, JSON.stringify(this.project.sprint));
        this.projectDetailsAvailable$.next(true);
        this._router.navigate(['/upload']);
    }
    
}