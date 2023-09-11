export class Image {
    imageId: number;
    isPrimary: boolean;
    url: string;

    constructor(imageId: number, isPrimary: boolean, url:string){
        this.imageId = imageId;
        this.isPrimary = isPrimary;
        this.url = url;
    }

}
