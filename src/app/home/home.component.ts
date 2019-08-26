import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // if(localStorage.getItem('userName') != null){
    //   this.router.navigate(['/welcome']);
    // }else{
    //   this.nav.show();
    // }
   
  }
}
