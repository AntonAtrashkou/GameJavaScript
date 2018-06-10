export default class Enemy {
    constructor(sprite, position) {
        this.sprite = sprite;
        this.position = position;
    }

    update(diff) {
        this.sprite.update(diff);
    }

    render() {
        this.sprite.render(this.position);
    }
}