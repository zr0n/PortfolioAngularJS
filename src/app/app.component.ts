import { Component } from '@angular/core';
import { Job, JobImage, YoutubeVideo } from "../types/types"
import { EmbedVideoService } from 'ngx-embed-video'
import { Category } from '../types/category'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jobs : Job[];
  allJobs : Job[];
  selectedCategory: Number = 1;
  embedVideoService : EmbedVideoService;

  constructor(embedVideoService : EmbedVideoService){
    this.embedVideoService = embedVideoService;

    this.setupJobs();
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


  setupJobs() : void {
    this.jobs = [];
    this.allJobs = []
  
    //mock
    let job0 : Job = new Job(this.embedVideoService); // Academigo
    let job1 : Job = new Job(this.embedVideoService); // BBlender
    let job2 : Job = new Job(this.embedVideoService); // Churroz Game Engine
    let job3 : Job = new Job(this.embedVideoService);
    let job4 : Job = new Job(this.embedVideoService);
    let job5 : Job = new Job(this.embedVideoService);
    let job6 : Job = new Job(this.embedVideoService);
    let job7 : Job = new Job(this.embedVideoService);
    let job8 : Job = new Job(this.embedVideoService);
    let job9 : Job = new Job(this.embedVideoService);
    let job10 : Job = new Job(this.embedVideoService);
    let job11: Job = new Job(this.embedVideoService);
    let job12: Job = new Job(this.embedVideoService);

    

    job0.categories.push(Category.Android, Category.Java);
    job1.categories.push(Category.Javascript);
    job2.categories.push(Category.C, Category.Other, Category.Unreal, Category.Unity);
    
    this.allJobs.push(job0, job1, job2, job3, job4, job5, job6, job7, job8, job9, job10, job11, job12);
    this.jobs = this.allJobs
  }

}
