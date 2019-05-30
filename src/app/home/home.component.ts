import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { EmbedVideoService } from 'ngx-embed-video'

import { Job, JobImage, YoutubeVideo } from "../../types"
import { Category } from '../../types/category'
import { CategoriesService } from '../categories.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs : Job[];
  location: Location;
  selectedCategory: number = 1;
  embedVideoService : EmbedVideoService;
  categoriesService: CategoriesService;
  
  public static allJobs : Job[];
  
  constructor(
    inEmbedVideoService : EmbedVideoService,
    inCategoriesService: CategoriesService,
    locationService: Location
  ){

    this.embedVideoService = inEmbedVideoService;
    this.location = locationService;  
    this.jobs = [];
    this.categoriesService = inCategoriesService;
    console.log("Categories Service: ", this.categoriesService)
    this.jobs = this.categoriesService.allJobs;
  }
  
  ngOnInit(){
    this.categoriesService.updateJobs();
    this.categoriesService.setCategory(this.selectedCategory)
    this.jobs = this.categoriesService.jobs;
  }

  selectCategory(categoryNumber : Number) : void{
    this.categoriesService.setCategory(categoryNumber)
    this.fetchJobs()
  }

  fetchJobs() : void{
    this.jobs = this.categoriesService.jobs;
  }



  private goToDetail( id : Number ){

    this.location.go(`/detail/${id}`)

  }
}
