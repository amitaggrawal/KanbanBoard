import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';


@Component({
  selector: 'app-navbar-log',
  templateUrl: './navbar-log.component.html',
  styleUrls: ['./navbar-log.component.css']
})
export class NavbarLogComponent implements OnInit {
  public display = false;
  username: String = localStorage.getItem('userName');
  constructor(public nav : NavbarService, public router: Router,private dialog: MatDialog ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['/']);
    const dialogRef = this.dialog.open(LogoutComponent);
    
  }

}
