import { Injectable } from '@angular/core';
import { ProductBacklog, Features, Story } from './backlog'

@Injectable({
  providedIn: 'root'
})
export class BacklogService {

  backlogData = localStorage.getItem('responsebacklog');
  
  constructor() { }
  featureslist: Features[];
  storylist : Story[]

  getBacklog():Features[] {
    console.log(JSON.parse(this.backlogData))
    const featuress : Features[] = new ProductBacklog(JSON.parse(this.backlogData)).features;
    console.log(featuress);
    this.featureslist=[];
    for(let a=0;a<featuress.length;a++){
      let feat = new Features();
      this.storylist =[];
      for(let b=0;b<featuress[a].story.length;b++){
          this.storylist.push(featuress[a].story[b]);
      }
      feat.feature = featuress[a].feature;
      feat.story = this.storylist;
      this.featureslist.push(feat);
    }
    return this.featureslist;
  }
}
