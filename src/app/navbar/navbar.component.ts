import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../Authentication/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  username = '';

  private _subscription: Subscription;

  constructor(private _authService: AuthService) { }

  ngOnInit() {

    this.isAuthenticated = this._authService.getAuthStatus();
    if (this.isAuthenticated) {
      this.username = this._authService.getAuthenticatedUsername();
    }
    this._subscription = this._authService.authChanged$.subscribe((status) => {
      this.isAuthenticated = status;
      if (this.isAuthenticated) {
        this.username = this._authService.getAuthenticatedUsername();
      }
    });
  }

  logout() {
    this._authService.logout();
  }

  ngOnDestroy() {
    if (this._subscription) {
      console.log('destroy of nav component');
      this._subscription.unsubscribe();
    }
  }

}
