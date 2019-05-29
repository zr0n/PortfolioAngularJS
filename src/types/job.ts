import { YoutubeVideo, JobImage } from "./types"
import { EmbedVideoService } from 'ngx-embed-video'


export class Job{
    public video : YoutubeVideo;
    public image : JobImage;
    public bShowVideo: Boolean = true;
    

    constructor(private embedVideoService : EmbedVideoService){
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