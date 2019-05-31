import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from "@angular/common/http"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { JobDetailComponent } from './job-detail/job-detail.component' 

import { EmbedVideo } from 'ngx-embed-video';
import { NgxMasonryModule } from 'ngx-masonry'

const appRoutes : Routes = [
  { path: '', component: HomeComponent},
  { path: 'detail/:id', component: JobDetailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    EmbedVideo.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  
  }
}
