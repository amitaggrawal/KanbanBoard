import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

import { NavbarService } from '../../../services/navbar.service';
import { UIService } from 'src/app/shared/ui.service';
import { AuthData } from '../../auth-data.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: AuthData//LoginModule = new LoginModule();
  loginForm: FormGroup;
  message: string;
  userid = new FormControl('', [Validators.required]);
  pass = new FormControl('', [Validators.required]);
  val: String
  error_msg: string;
  owner: []
  member: []
  errormessage: string;

  constructor(private formBuilder: FormBuilder, public authService: AuthService, public router: Router,
    private logService: LoginService, public nav: NavbarService, private _authService: AuthService,  private _uiService: UIService) {
    // this.setMessage();
  }
  
  // setMessage() {
  //   this.message = 'Logged' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }

  ngOnInit() {

    if (localStorage.getItem('userName') != null) {
      this.router.navigate(['/welcome']);
    } else {
      this.nav.show();
      this.loginForm = this.formBuilder.group({
        'username': ['', [Validators.required, Validators.minLength(6)]],
        'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
      });
    }

  }
  private displayError = false;
  getErrorMessage() {
    return this.userid.hasError('required') ? 'Employee ID is only a numeric' : '';
  }

  getPassErrorMessage() {
    return this.pass.getError('required') ? 'Password is required/Minimum 6 characters' : '';
  }


  //@amitaggrawal: Function initiated when user clicks login button.
  logUser() {
    this._authService.loginUser(this.loginForm.value);
    
    this._authService.authenticationFailed$.subscribe(failureMessage => {
      this.error_msg = failureMessage;
      this.displayError = true;
      this._uiService.showSnackbar(failureMessage, 3000);
    })
    
    // this.logService.logUser(this.loginForm.value)

    //   .subscribe(res => {
    //     console.log(res);

    //     console.log(res.user['_id']);
    //     console.log(res.user['username']);
    //     console.log(res.user.projects)

    //     if (res.status == false) {
    //       this.error_msg = "Invalid username or password";
    //       this.displayError = true;

    //     } else {
    //       var user1 = res.user['_id'];
    //       var user2 = res.user['username'];
    //       console.log(user2);
    //       localStorage.setItem('userId', user1);
    //       localStorage.setItem('userName', user2);
    //       localStorage.setItem('owner', JSON.stringify(res.user.projects));
    //     }
    //     if (res['status']) {
    //       this.router.navigate(['/welcome']);
    //     } else {
    //       this.router.navigate(['/']);
    //     }




    //   },

    //     (err: any) => {
    //       console.log('in err block');
    //       console.log(err['status']);
    //       console.log(err['error']['msg']);
    //       var msg = err['error']['msg'];
    //       this.errormessage = msg;
    //       this.displayError = true;



    //     }


    //   );



  }

}