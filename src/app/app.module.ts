import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from "@angular/common/http"

import { EmbedVideo } from 'ngx-embed-video';
import { JobDetailComponent } from './job-detail/job-detail.component' 

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  
  }
}
