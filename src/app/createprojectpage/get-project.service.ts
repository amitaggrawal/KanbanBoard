import { Injectable } from '@angular/core';
import { Constants, LocalStorageKey } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { HelperUtil } from '../shared/helper.util';
import { User } from '../Authentication/user.model';
import { Subject } from 'rxjs';

@Injectable({
    "providedIn": "root"
})
export default class GetProjectService {

    private getProjectURL = Constants.baseURLLocal + Constants.getProjectAPIEndPoint;
    private user: User;
    
    projectsAvailable$ = new Subject<boolean>();

    constructor(private _httpClient: HttpClient) { }

    getProjects(username: string) {
        this._httpClient.post<User>(this.getProjectURL, { username })
            .subscribe((data) => {
                this.user = data;
                HelperUtil.storeInLocalStorage(LocalStorageKey.projects, JSON.stringify(this.user.projects))
                this.projectsAvailable$.next(true);
            }, (error) => {
                console.log(error);
            });
    }

}