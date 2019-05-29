import { Component } from '@angular/core';
import { Job, JobImage, YoutubeVideo } from "../types/types"
import { EmbedVideoService } from 'ngx-embed-video'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jobs : Job[];
  allJobs : Job[];
  selectedCategory: Number = 1;

  constructor(embedVideoService : EmbedVideoService){
    this.jobs = [];
    this.allJobs = []
  
    //mock
    let jobA : Job = new Job(embedVideoService);
    let jobB : Job = new Job(embedVideoService);
    let jobC : Job = new Job(embedVideoService);

    
    jobA.setVideo("https://www.youtube.com/watch?v=bvNRHl1Dvms");
    jobB.setImage("https://artsy-media-uploads.s3.amazonaws.com/Pyo_SAf2dhbPw8roiVL9Cw%2Fcustom-Custom_Size___small+penis.jpg");
    jobC.setImage("https://www.ancient.eu/img/r/p/500x600/3821.jpg?v=1485681375");

    jobA.categories.push(1,3);
    jobC.categories.push(2,4);
    jobB.categories.push(1,2,3);
    
    this.allJobs.push(jobA, jobB, jobC);
    this.jobs = this.allJobs
  }


  selectCategory(categoryNumber : Number) : void{
    this.selectedCategory = categoryNumber;
    this.updateJobs();
  }
  updateJobs() : void{
    this.jobs = this.allJobs.filter((job: Job) => {
      return job.categories.find(category => category == this.selectedCategory)
    })
  }

}
