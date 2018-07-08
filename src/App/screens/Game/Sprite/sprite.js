export default class Sprite {
    constructor(context, width, imgWidth, imgHeight, image, speed, frames, isInfinite) {
        this.context = context;
        this.width = width;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.image = image;
        this.speed = speed;
        this.frames = frames;
        this.framesNum = frames.length;
        this.duration = 0;

        this.isInfinite = isInfinite;
        this.lastFrame = frames[frames.length - 1];
        
        this.frame = 0;
        this.flag = true;
    }


    render(position) {
        const roundedDuration = Math.round(this.duration);
        if (this.flag) {
            this.frame = this.frames[roundedDuration % this.framesNum];
        }
        if (!this.isInfinite && this.frame === this.lastFrame) {
            this.flag = false;
        }
        
        const x = this.width;
        const y = this.frame * this.imgHeight;

        this.context.drawImage(
            this.image,
            x,
            y,
            this.imgWidth,
            this.imgHeight,
            position[0],
            position[1],
            this.imgWidth,
            this.imgHeight);
    }

    update(diff) {
        this.duration += this.speed * diff;
    }
}