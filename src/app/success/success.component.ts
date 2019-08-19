import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import {Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<SuccessComponent>, private router : Router) { }

  ngOnInit() {
  }
onNoClick(){
  this.router.navigate(['/login']);
  console.log('here!')
  this.dialogRef.close();


}

}
