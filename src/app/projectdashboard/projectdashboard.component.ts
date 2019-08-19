import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-projectdashboard',
  templateUrl: './projectdashboard.component.html',
  styleUrls: ['./projectdashboard.component.css']
})
export class ProjectdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private loadMember = false;
  private loadArtifacts = false;
  private loadSprints = false;
  

  viewTeam(){
    this.loadArtifacts = false;
    this.loadSprints = false;
    if(this.loadMember==false){
      this.loadMember=true;
    }
  }

  viewArtifacts(){
    this.loadMember=false;
    this.loadSprints=false;
    if(this.loadArtifacts==false){
      this.loadArtifacts=true;
    }

  }

  viewSprint(){
    this.loadArtifacts=false;
    this.loadMember=false;
    if(this.loadSprints==false){
        this.loadSprints=true;
    }
  }

}
