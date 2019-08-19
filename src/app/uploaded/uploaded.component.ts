import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-uploaded',
  templateUrl: './uploaded.component.html',
  styleUrls: ['./uploaded.component.css']
})
export class UploadedComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<UploadedComponent>) { }

  ngOnInit() {
  }
 onNoClick(){
   this.dialogRef.close();
   window.location.reload();
 } 
}
