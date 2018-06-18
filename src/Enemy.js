import Sprite from './Sprite';
import RandomingEnemy from './RandomingEnemy';

export default class Enemy {
    constructor(ctx, imgs) {
        this.ctx = ctx;
        this.images = {
            'idle': imgs['spriteTrollStaticImg'],
            'die': imgs['spriteTrollDieImg'],
            'hurt': imgs['spriteTrollHurtImg'],
            'atack': imgs['spriteTrollAttackImg'],
        };
        this.sprites = {};
        this.currentState = 'idle';

        this.positions = {
            rightLeg: [485, 325],
            leftLeg: [520, 325],
            rightArm: [410, 275],
            body: [500, 255],
            lefrArm: [555, 265],
            head: [495, 215],
        };

        this.randomingEnemy = new RandomingEnemy(0, 2);
        this.init();
    }

    init() {
        Object.entries(this.images).forEach(entrie => {
            const enemyImage = new Image();
            enemyImage.src = entrie[1];
            this.sprites[entrie[0]] = {
                rightLeg: new Sprite(this.ctx, this.randomingEnemy.rightLeg, 210, 210, enemyImage, 16, [0,1,2,3,4], true),
                leftLeg: new Sprite(this.ctx, this.randomingEnemy.leftLeg, 210, 210, enemyImage, 16, [0,1,2,3,4], true),
                rightArm: new Sprite(this.ctx, this.randomingEnemy.rightArm, 210, 210, enemyImage, 16, [0,1,2,3,4], true),
                body: new Sprite(this.ctx, this.randomingEnemy.body, 210, 210, enemyImage, 16, [0,1,2,3,4], true),
                lefrArm: new Sprite(this.ctx, this.randomingEnemy.leftArm, 210, 210, enemyImage, 16, [0,1,2,3,4], true),
                head: new Sprite(this.ctx, this.randomingEnemy.head, 210, 210, enemyImage, 16, [0,1,2,3,4], true),
            }
        }); 
    }

    changeCurrrentSprite(key) {
        this.currentState = key;
    }

    update(diff) {
        Object.values(this.sprites[this.currentState]).forEach(value => value.update(diff));
    }

    render() {
        Object.entries(this.sprites[this.currentState]).forEach(entrie => {
            entrie[1].render(this.positions[entrie[0]]);
        });
    }
}
