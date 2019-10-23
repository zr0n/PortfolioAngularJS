import { EmbedVideoService } from 'ngx-embed-video'

import { YoutubeVideo } from "./youtube-video"
import { JobImage } from './job-image'
import { Category } from './category'
import { DomSanitizer } from '@angular/platform-browser'

const DEFAULT_VIDEO : string = "";

export class Job {
    public id : Number;
    public title : string = "Undefined";
    public video : YoutubeVideo;
    public image : JobImage;
    public bShowVideo: Boolean = true;
    public categories : Category[] = [];
    public descriptions : any = {
        "pt-BR" : "",
        "en-US" : ""
    };
    public thumbnail : string = "https://via.placeholder.com/150";
    

    public static ID_COUNT : number = 0;

    constructor(
        private embedVideoService : EmbedVideoService,
    ){
        this.id = Job.ID_COUNT;
        Job.ID_COUNT++;
        this.setVideo(DEFAULT_VIDEO);
    }
    public setVideo(newVideoID : string){
        let newVideo : YoutubeVideo = new YoutubeVideo(newVideoID);
        newVideo.videoService = this.embedVideoService;
        this.video = newVideo;
        this.bShowVideo = true;
    }

    public setImage(newImageUrl : string) { 
        let newImage : JobImage = new JobImage(newImageUrl);
        this.image = newImage;
        this.bShowVideo = false;
    }

    public showVideo() : string {
        return this.video.showEmbedVideo();
    }

    public showImage() : string {
        return this.image.show();
    }

    public show() : string { 
        
        if(this.bShowVideo)
            return this.showVideo();
        else
            return this.showImage();
    }

    public titleWithBrackets() : string{
        return `{ ${this.title} }`
    }

    public setupWithVideo(
        inTitle: string,
        inDescriptions: any,
        inCategories : Category[],
        inVideo: string,
        inThumbnail : string = ""
        ) : void {
        this.title = inTitle
        this.setVideo(inVideo);
        this.setup(inDescriptions, inCategories);
        
        this.setThumbnail(inThumbnail)

    }

    public setupWithImage(
        inTitle : string,
        inDescriptions: any,
        inCategories : Category[],
        inImage: string,
        inThumbnail : string = ""
        ) : void {

        this.title = inTitle
        this.setImage(inImage);
        this.setup(inDescriptions, inCategories);

        this.setThumbnail(inThumbnail)
    }

    public setup(inDescriptions:any, inCategories: Category[]){
        this.categories = inCategories;
        this.descriptions = inDescriptions;

    }

    public setThumbnail(inThumbnail: string) : void{
        this.thumbnail = inThumbnail.length > 0 ? inThumbnail : this.thumbnail;
    }

}