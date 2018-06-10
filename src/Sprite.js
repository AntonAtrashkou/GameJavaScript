export default class Sprite {
    constructor(context, width, imgWidth, imgHeight, image, speed, frames) {
        this.context = context;
        this.width = width;
        this.imgWidth = imgWidth;
        this.imgHeight = imgHeight;
        this.image = image;
        this.speed = speed;
        this.frames = frames;
        this.framesNum = frames.length;
        this.duration = 0;
    }

    render(position) {
        const roundedDuration = Math.round(this.duration);
        const frame = this.frames[roundedDuration % this.framesNum];
        const x = this.width;
        const y = frame * this.imgHeight;

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