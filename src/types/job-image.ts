export class JobImage {
    private imageUrl: string;

    public setImageUrl(newImageUrl: string) : void{
        this.imageUrl = newImageUrl;
    }

    public show() : string{
        return `<img src="${this.imageUrl}" />`;
    }

    constructor(imageUrl : string){
        this.imageUrl = imageUrl;
    }
}