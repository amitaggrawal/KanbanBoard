import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { AuthData } from '../../auth-data.model';
import { Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  user: AuthData;
  //user: RegisterModule = new RegisterModule();
  registerForm: FormGroup;
  errorMessage: string = "User already exists";
  displayError;
  errorSubscription: Subscription;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private _authService: AuthService, private _uiService: UIService) { }

  ngOnInit() {

    if (localStorage.getItem('userName') != null) {
      this.router.navigate(['/welcome'])
    } else {
      this.registerForm = this.formBuilder.group({
        'username': ['', [Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
      });
    }

    this.errorSubscription = this._authService.authenticationFailed$.subscribe((errorMsg) => {
      this.displayError = true;
      this.errorMessage = "Username " + errorMsg;
      this._uiService.showSnackbar(this.errorMessage, 3000);
    });

  }

  onRegister() {
    console.log(this.registerForm.value)
    this._authService.registerUser(this.registerForm.value);
  }

  ngOnDestroy() {
    if (this.errorSubscription != null) {
      this.errorSubscription.unsubscribe();
    }
  }




}
