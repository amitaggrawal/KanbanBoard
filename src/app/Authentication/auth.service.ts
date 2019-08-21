import { Constants, HttpError, LocalStorageKey } from '../constants/constants';
import { AuthData } from './auth-data.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User, AuthenticationSuccessResponse } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UIService } from '../shared/ui.service';
import { HelperUtil } from '../shared/helper.util';
import { ReactiveFormsModule } from '@angular/forms';
import { error } from 'util';


@Injectable()
export class AuthService {

    private loginURL = Constants.baseURLLocal + Constants.loginAPIEndPoint;
    private registrationURL = Constants.baseURLLocal + Constants.registerAPIEndPoint;

    private user: User;

    public authenticationFailed$ = new Subject<string>();
    public authChanged$ = new Subject<boolean>();

    constructor(private _httpClient: HttpClient, private _router: Router, private uiService: UIService) {

    }

    loginUser(credentials: AuthData) {
        this._httpClient.post<AuthenticationSuccessResponse>(this.loginURL, credentials)
            .subscribe((authenticationResonse: AuthenticationSuccessResponse) => {
                if (authenticationResonse.status) {
                    this.user = authenticationResonse.user;
                    this.afterSuccessfulLogin();
                }
            }, (error) => {
                this.authenticationFailed$.next(HttpError.invalidLogin);
            });
    }

    private afterSuccessfulLogin() {
        this.authChanged$.next(true);
        HelperUtil.storeInLocalStorage(LocalStorageKey.authenticated, "true");
        HelperUtil.storeInLocalStorage(LocalStorageKey.user, JSON.stringify(this.user));
        this._router.navigate(['/welcome']);
    }

    //This will tell auth guard where user is authenticated or not
    isAuth() {
        return this.user != null;
    }

    //This give auth status to navbar component. Initially this method is checked when page is loaded / refreshed.
    getAuthStatus() {
        return HelperUtil.getFromLocalStorage(LocalStorageKey.authenticated) == "true" ? true : false;
    }

    getAuthenticatedUsername() {
        if (this.user != null) {
            return this.user.username;
        } else {
            // User will be null on refresh check data in localstorage and return username. Leaving for later now.
            console.log('user is null');
        }
    }

    registerUser(credentials: AuthData) {
        this._httpClient.post(this.registrationURL, credentials)
            .subscribe((authenticationResponse:AuthenticationSuccessResponse) => {
                console.log(authenticationResponse);
                if(authenticationResponse.status){
                    this.user = authenticationResponse.user;
                    this.afterSuccessfulLogin();
                }
                
            }, (authenticationResonse) => {
                 //This is HTTP error block. 300 means our custom error, 500, 404 are default http errors.
                if(authenticationResonse instanceof HttpErrorResponse){    
                    console.log(authenticationResonse);
                    if(authenticationResonse.status == 300){
                        this.authenticationFailed$.next(authenticationResonse.error.msg);
                    }
                }
            });

    }

    //This method is executed from navbar logout button. 
    logout() { 
        HelperUtil.storeInLocalStorage(LocalStorageKey.authenticated, "false");
        this.authChanged$.next(false);
        this.user = null;
        this._router.navigate(['/']);
    }
}