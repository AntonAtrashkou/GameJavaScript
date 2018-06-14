import Sprite from './Sprite';

export default class Enemy {
    constructor(sprite, position) {
        this.sprite = sprite;
        this.position = position;
        
        const enemyImage = new Image();
        // enemyImage.src = this.images['spriteTrollStaticImg'];
        enemyImage.src = this.images['spriteTrollDieImg'];
        
        this.enemyHead = new Enemy(
            new Sprite(this.ctx, 2510, 210, 210, enemyImage, 1, [0,1,2,3,4]),
            [495, 215],
        );
        this.enemyBody = new Enemy(
            new Sprite(this.ctx, 2725, 210, 210, enemyImage, 1, [0,1,2,3,4]),
            [500, 255],
        );
        this.enemyLeftArm = new Enemy(
            new Sprite(this.ctx, 2935, 210, 210, enemyImage, 1, [0,1,2,3,4]),
            [555, 265],
        );
        this.enemyRightArm = new Enemy(
            new Sprite(this.ctx, 3145, 210, 210, enemyImage, 1, [0,1,2,3,4]),
            [410, 275],
        );
        this.enemyLeftLeg = new Enemy(
            new Sprite(this.ctx, 3355, 210, 210, enemyImage, 1, [0,1,2,3,4]),
            [520, 325],
        );
        this.enemyRightLeg = new Enemy(
            new Sprite(this.ctx, 3565, 210, 210, enemyImage, 1, [0,1,2,3,4]),
            [485, 325],
        );
    }

    update(diff) {
        this.sprite.update(diff);
    }

    render() {
        this.sprite.render(this.position);
    }
}