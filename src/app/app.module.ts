import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http"

import { EmbedVideo } from 'ngx-embed-video' 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmbedVideo.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  
  }
}
