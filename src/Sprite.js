export default class Sprite {
    constructor(context, width, height, image, speed, frames) {
        this.context = context;
        this.width = width;
        this.height = height;
        this.image = image;
        this.speed = speed;
        this.frames = frames;
        this.framesNum = frames.length;
        this.duration = 0;
    }

    render(position) {
        const roundedDuration = Math.round(this.duration);
        const frame = this.frames[roundedDuration % this.framesNum];
        const x = frame * this.width;
        const y = 0;

        this.context.drawImage(
            this.image,
            x,
            y,
            this.width,
            this.height,
            position[0],
            position[1],
            this.width,
            this.height);
    }

    update(diff) {
        this.duration += this.speed * diff;
    }
}