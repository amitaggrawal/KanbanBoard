import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-exists',
  templateUrl: './exists.component.html',
  styleUrls: ['./exists.component.css']
})
export class ExistsComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<ExistsComponent>) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close();
    window.location.reload();
  }

}
