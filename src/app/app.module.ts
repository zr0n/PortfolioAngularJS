import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HttpClientModule } from "@angular/common/http"

import { EmbedVideo } from 'ngx-embed-video' 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    EmbedVideo.forRoot(),
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  
  }
}
