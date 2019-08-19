import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<LogoutComponent>) { }

  ngOnInit() {
  }

onNoClick(){
  this.dialogRef.close();
}

}
