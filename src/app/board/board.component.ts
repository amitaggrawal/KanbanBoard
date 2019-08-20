import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<BoardComponent>) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close();
    window.location.reload();
  }

}
