import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { EmbedVideoService } from 'ngx-embed-video'

import { Job, JobImage, YoutubeVideo } from "../../types"
import { CategoriesService, CategoryName } from '../categories.service'
import { LanguageService } from '../language.service';


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
  languageService: LanguageService;
  categoriesNames : CategoryName[];
  jobHovered:Job;
  
  public static allJobs : Job[];
  
  constructor(
    inEmbedVideoService : EmbedVideoService,
    inCategoriesService: CategoriesService,
    languageService: LanguageService,
    locationService: Location
  ){

    this.embedVideoService = inEmbedVideoService;
    this.location = locationService;  
    this.jobs = [];
    this.categoriesService = inCategoriesService;
    this.languageService = languageService;
    this.jobs = this.categoriesService.allJobs;
  }
  
  ngOnInit(){
    this.categoriesService.updateJobs();
    this.categoriesService.setCategory(this.selectedCategory)
    this.jobs = this.categoriesService.jobs;
    this.categoriesNames = this.categoriesService.categoriesNames
  }
  
  selectCategory(categoryNumber : Number) : void{
    this.categoriesService.setCategory(categoryNumber)
    this.selectedCategory = +categoryNumber
    this.fetchJobs()
  }

  fetchJobs() : void{
    this.jobs = this.categoriesService.jobs;
  }

  hoveredItem(id: number): void{
    this.jobHovered = this.categoriesService.searchJob(id)
  }

  unHoverItem(): void{
    this.jobHovered = undefined
  }

  setLangugage(newLangugage: string){
    this.languageService.setLanguage(newLangugage);
  }
  
  private goToDetail( id : Number ){
    this.location.go(`/detail/${id}`)

  }
}
