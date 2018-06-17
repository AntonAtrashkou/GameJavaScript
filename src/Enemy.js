import Sprite from './Sprite';
import RandomingEnemy from './RandomingEnemy';

export default class Enemy {
    constructor(ctx, img) {
        this.ctx = ctx;
        this.images = {};
        this.sprites = {
            'idle':'spriteTrollStaticImg',
            'die':'spriteTrollDieImg',
            'hurt':'spriteTrollHurtImg',
            'atack':'spriteTrollAttackImg',
        };
        this.positions = {
            enemyHead:[495, 215],
            enemyBody:[500, 255],
            enemyLeftArm:[555, 265],
            enemyRightArm:[410, 275],
            enemyLeftLeg:[520, 325],
            enemyRightLeg:[485, 325]
        };

        this.randomingEnemy = new RandomingEnemy(0, 2);
        this.initHero(img);
                
        // this.stateSubscrioption = document.addEventListener('updateState', (e) => {
        //     if (e.detail.images) {
        //         this.images = e.detail.images;
        //         this.initHero(this.images['spriteTrollStaticImg']);
        //     } 
        // });
        // this.currentState = 'idle';
    }
     initHero(img) {
        const enemyImage = new Image();
        enemyImage.src = img;
        this.enemyHead = new Sprite(this.ctx, this.randomingEnemy.head, 210, 210, enemyImage, 5, [0,1,2,3,4], true);
        this.enemyBody = new Sprite(this.ctx, this.randomingEnemy.body, 210, 210, enemyImage, 5, [0,1,2,3,4], true);
        this.enemyLeftArm = new Sprite(this.ctx, this.randomingEnemy.leftArm, 210, 210, enemyImage, 5, [0,1,2,3,4], true);
        this.enemyRightArm = new Sprite(this.ctx, this.randomingEnemy.rightArm, 210, 210, enemyImage, 5, [0,1,2,3,4], true);
        this.enemyLeftLeg = new Sprite(this.ctx, this.randomingEnemy.leftLeg, 210, 210, enemyImage, 5, [0,1,2,3,4], true);
        this.enemyRightLeg = new Sprite(this.ctx, this.randomingEnemy.rightLeg, 210, 210, enemyImage, 5, [0,1,2,3,4], true);
    }

    // changeCurrrentEnemySprite(key) {
    //     this.currentState = key;
    // }

    update(diff) {
        this.enemyRightLeg.update(diff);
        this.enemyLeftLeg.update(diff);
        this.enemyRightArm.update(diff);
        this.enemyBody.update(diff);
        this.enemyLeftArm.update(diff);
        this.enemyHead.update(diff);
    }

    render() {
        this.enemyRightLeg.render(this.positions.enemyRightLeg);
        this.enemyLeftLeg.render(this.positions.enemyLeftLeg);
        this.enemyRightArm.render(this.positions.enemyRightArm);
        this.enemyBody.render(this.positions.enemyBody);
        this.enemyLeftArm.render(this.positions.enemyLeftArm);
        this.enemyHead.render(this.positions.enemyHead);
    }
}


        // this.enemyRightLeg.update(diff);
        // this.enemyLeftLeg.update(diff);
        // this.enemyRightArm.update(diff);
        // this.enemyBody.update(diff);
        // this.enemyLeftArm.update(diff);
        // this.enemyHead.update(diff);