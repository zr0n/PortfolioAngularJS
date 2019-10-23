import { EmbedVideoService } from "ngx-embed-video"


export class YoutubeVideo{
    public videoService : EmbedVideoService;
    private videoURL : string;
    private width : string =  "100%";
    private height : string = "400";
    
    public setVideoUrl(newVideoURL: string) : void {
        this.videoURL = newVideoURL
    }
    public showEmbedVideo() : string{
        return this.videoService.embed(
            this.videoURL,
            {   //options
                attr: { width: this.width, height: this.height }
            });
    }
    constructor(
        videoURL: string
    ){
        this.setVideoUrl(videoURL);
    }

}