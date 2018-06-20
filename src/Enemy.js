import Sprite from './Sprite';
import RandomingEnemy from './RandomingEnemy';
import AttackEnemy from './AttackEnemy';
import Health from './Health';
import EnemyName from './EnemyName';


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
        this.enemyName = new EnemyName;
        this.enemyHealth = new Health(ctx, [635, 15], this.enemyName.fullName);

        this.randomingEnemy = new RandomingEnemy(0, 2);
        this.init();
    }

    init() {
        Object.entries(this.images).forEach(entrie => {
            const enemyImage = new Image();
            enemyImage.src = entrie[1];
            this.sprites[entrie[0]] = {
                rightLeg: new Sprite(this.ctx, this.randomingEnemy.rightLeg, 210, 210, enemyImage, 10, [0,1,2,3,4], false),
                leftLeg: new Sprite(this.ctx, this.randomingEnemy.leftLeg, 210, 210, enemyImage, 10, [0,1,2,3,4], false),
                rightArm: new Sprite(this.ctx, this.randomingEnemy.rightArm, 210, 210, enemyImage, 10, [0,1,2,3,4], false),
                body: new Sprite(this.ctx, this.randomingEnemy.body, 210, 210, enemyImage, 10, [0,1,2,3,4], false),
                lefrArm: new Sprite(this.ctx, this.randomingEnemy.leftArm, 210, 210, enemyImage, 10, [0,1,2,3,4], false),
                head: new Sprite(this.ctx, this.randomingEnemy.head, 210, 210, enemyImage, 10, [0,1,2,3,4], false),
            }

            this.atackEnemy = new AttackEnemy(this.ctx, this.images['atack']);
        });
        Object.values(this.sprites['idle']).forEach(value => {
            value.isInfinite = true;
        }) 
    }

    changeCurrrentEnemySprite(key) {
        this.currentState = key;
    }

    atack(callback) {
        this.changeCurrrentEnemySprite('atack');
        setTimeout(() => {
            this.atackEnemy.triggerAtack(callback);
            this.changeCurrrentEnemySprite('idle');
        }, 400);
    }

    triggerHurt() {
        this.changeCurrrentEnemySprite('hurt');
        setTimeout(() => {
            this.changeCurrrentEnemySprite('idle');
            this.enemyHealth.triggerHealthReduce();
        }, 400);
    }

    update(diff) {
        this.enemyHealth.update(diff);
        Object.values(this.sprites[this.currentState]).forEach(value => value.update(diff));
        this.atackEnemy.update(diff);
    }

    render() {
        this.enemyHealth.render();
        Object.entries(this.sprites[this.currentState]).forEach(entrie => {
            entrie[1].render(this.positions[entrie[0]]);
        });
        this.atackEnemy.render();
    }
}
