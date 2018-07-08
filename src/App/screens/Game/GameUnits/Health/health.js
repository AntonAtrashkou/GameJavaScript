export default class Health {
    constructor(ctx, position, name) {
        this.ctx = ctx;
        this.position = position;
        this.name = name;

        this.health = 250;
        this.speed = 1;

        this.reduce = 50;
        this.duration = 0;
        this.makeReduce = false;
    }

    triggerHealthReduce() {
        this.makeReduce = true;
    }

    render() {
        this.ctx.fillStyle = "rgb(0, 0, 0)";
        this.ctx.fillRect(this.position[0] - 5, this.position[1] - 5, 260, 85);
        this.ctx.fillStyle = "rgb(104, 71, 165)";
        this.ctx.fillRect(this.position[0], this.position[1] + 45, 250, 30);
        this.ctx.fillStyle = "rgb(214, 84, 62)";
        this.ctx.fillRect(this.position[0], this.position[1], 250, 40);
        this.ctx.fillStyle = "rgb(119, 221, 117)";
        this.ctx.fillRect(this.position[0], this.position[1], this.health, 40);
        this.ctx.fillStyle = "rgb(0, 0, 0)";
        this.ctx.font = "20px cursive, sans-serif"
        this.ctx.fillText(`${this.name}`, this.position[0] + 10, this.position[1] + 67);
        this.ctx.font = "20px cursive, sans-serif"
        this.ctx.fillText(`${this.health}`, this.position[0] + 10, this.position[1] + 27);
    }

    update(diff) {
        if (this.makeReduce) {
            this.duration += this.speed * diff;
            this.reduce = this.reduce - Math.round(this.duration);
            this.health = this.health - Math.round(this.duration);
            if (this.reduce <= 0) {
                this.makeReduce = false;
                this.duration = 0;
                this.reduce = 50;
            }
        }
    }
}
