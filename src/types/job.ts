import { YoutubeVideo } from "./youtube-video"
import { JobImage } from './job-image'
import { EmbedVideoService } from 'ngx-embed-video'
import { Category } from './category'

const DEFAULT_VIDEO : string = "";

export class Job {
    public id : Number;
    public video : YoutubeVideo;
    public image : JobImage;
    public bShowVideo: Boolean = true;
    public categories : Category[] = [];
    public description : string = "";


    private static ID_COUNT : number = 0;

    constructor(private embedVideoService : EmbedVideoService){
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

}