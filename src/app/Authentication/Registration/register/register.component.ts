import { RegisterService } from './../../../services/register.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterModule } from './register.module';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule, MatDialog } from '@angular/material';
import { NavbarService } from '../../../services/navbar.service';
import { Router } from '@angular/router';
import { SuccessComponent } from 'src/app/success/success.component';
import { ExistsComponent } from 'src/app/exists/exists.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : RegisterModule = new RegisterModule();
  registerForm : FormGroup;
  hide: true ;
  errormessage: string = "User already exists";
  displayError = false;
  constructor(private formBuilder: FormBuilder, private sendRegisterdata: RegisterService, public nav : NavbarService,
    private router : Router,private dialog: MatDialog) { }

  ngOnInit() {

    if(localStorage.getItem('userName') != null ){
      this.router.navigate(['/welcome'])
    }else{
      this.nav.show();
    this.registerForm = this.formBuilder.group({
      'username':[this.user.username,[Validators.required]],
      'password' :[this.user.password,[Validators.required, Validators.minLength(6),Validators.maxLength(15)]]
    });
    }
    
  }
  onRegister(){
    console.log(this.registerForm.value)
    this.sendRegisterdata.addRegister(this.registerForm.value).subscribe((response) => {
      console.log(response);
      this.router.navigate['/login'];
      const dialogRef = this.dialog.open(SuccessComponent);

    },
    (err: any) =>{
      console.log('in err block');
      console.log(err['status']);
      console.log(err['error']['msg']);
      var msg = err['error']['msg'];
      const dialogRef = this.dialog.open(ExistsComponent);
      
      

    }
    )
  }

  

 

}
