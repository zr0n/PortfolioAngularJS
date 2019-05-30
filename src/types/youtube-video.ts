import { EmbedVideoService } from "ngx-embed-video"


export class YoutubeVideo{
    public videoService : EmbedVideoService;
    private videoURL : string;
    private width : Number =  1200;
    private height : Number = 670;
    
    public setVideoUrl(newVideoID: string) : void {
        this.videoURL = newVideoID;
    }
    public showEmbedVideo() : string{
        return this.videoService.embed_youtube(this.videoURL);
    }
    constructor(videoID: string){
        this.videoURL = videoID;
    }

}