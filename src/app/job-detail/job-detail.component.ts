import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Job } from '../../types'

import { EmbedVideoService } from 'ngx-embed-video';


import { HomeComponent } from '../home/home.component'
import { CategoriesService } from '../categories.service'


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public static route : ActivatedRoute;

  private categoriesService : CategoriesService;

  id : Number;
  job : Job;
  allJobs : Job[];

  constructor(
    private activatedRoute : ActivatedRoute,
    private embedVideoService: EmbedVideoService,
    private inCategoriesService : CategoriesService
    ) {
    JobDetailComponent.route = activatedRoute;
    this.categoriesService = inCategoriesService;
  }

  ngOnInit() {
    this.id = +JobDetailComponent.route.snapshot.paramMap.get("id");
    this.job = this.categoriesService.selectCategory(this.id)
    this.allJobs = HomeComponent.allJobs
  }

  

}
