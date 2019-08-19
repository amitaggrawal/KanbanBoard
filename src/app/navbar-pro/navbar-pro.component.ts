import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-navbar-pro',
  templateUrl: './navbar-pro.component.html',
  styleUrls: ['./navbar-pro.component.css']
})
export class NavbarProComponent implements OnInit {
  username: String = localStorage.getItem('userName');
  projectname : String = localStorage.getItem('projectname');
  constructor(public nav : NavbarService, public router: Router,private dialog: MatDialog ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('userName');
    this.router.navigate(['/']);
    const dialogRef = this.dialog.open(LogoutComponent);
  }

}
