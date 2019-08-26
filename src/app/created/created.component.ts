import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css']
})
export class CreatedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onNoClick(){
    
    window.location.reload();
  }

}
