import { Injectable } from '@angular/core';

const supportedLanguages : string[] = [
  "pt-BR",
  "en-US"
]

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: string;

  constructor() {
    this.loadSelectedLanguage();
  }

  public loadSelectedLanguage(){
    let language: string = localStorage.getItem("language"); 
    if(!this.languageAvailable(language))
      language = navigator.language;
    
    this.setLanguage(language);    
  }

  languageAvailable(language : string) : boolean{
    return !!supportedLanguages.find((lang: string) => lang == language);
  }
  setLanguage(newLanguage : string) : void{
    if(!this.languageAvailable(newLanguage)){
      console.error("Invalid language selected: " + newLanguage);
      newLanguage = supportedLanguages[1] // set language to english if it was not available
    }
    localStorage.setItem("language", newLanguage);
    this.language = newLanguage;
    console.log("New Language selected: ", this.language);
  }
  getCurrentLanguage(){
    return this.language;
  }
}
