import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Job } from '../../types'

import { HomeComponent } from '../home/home.component'
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public static route : ActivatedRoute;

  id : Number;
  job : Job;
  allJobs : Job[];

  constructor(
    private activatedRoute : ActivatedRoute,
    private embedVideoService: EmbedVideoService
    ) {
    HomeComponent.setupJobs(embedVideoService);
    JobDetailComponent.route = activatedRoute;
  }

  ngOnInit() {
    this.id = +JobDetailComponent.route.snapshot.paramMap.get("id");
    this.job = this.searchJob(this.id)
    this.allJobs = HomeComponent.allJobs
  }

  searchJob(id : Number) : Job{
    let jobFound: Job;
    HomeComponent.allJobs.map(( job : Job) => {
      if(job.id == id)
        jobFound = job
    });
    return jobFound;
  }

}
