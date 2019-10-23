import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from "@angular/common"

import { EmbedVideoService } from 'ngx-embed-video';


import { HomeComponent } from '../home/home.component'
import { CategoriesService } from '../categories.service'
import { Job } from '../../types'
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  public static route : ActivatedRoute;

  private categoriesService : CategoriesService;
  private languageService : LanguageService;
  private location : Location;


  id : Number;
  job : Job;

  constructor(
    activatedRoute : ActivatedRoute,
    embedVideoService: EmbedVideoService,
    inCategoriesService : CategoriesService,
    languageService: LanguageService,
    inLocation: Location
    ) {
    JobDetailComponent.route = activatedRoute;
    this.categoriesService = inCategoriesService;
    this.languageService = languageService;
    this.location = inLocation;
  }

  ngOnInit() {
    this.id = +JobDetailComponent.route.snapshot.paramMap.get("id");
    this.categoriesService.setCategory(this.id)
    this.job = this.categoriesService.searchJob(this.id)
  }

  getLanguage() : string{
    return this.languageService.language;
  }
  public back() : void{
    this.location.back();
  }

  
}
