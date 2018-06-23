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
            'attack': imgs['spriteTrollAttackImg'],
        };
        this.sprites = {};
        this.currentState = 'idle';
        this.isDead = false;
        this.positions = {
            rightLeg: [560, 325],
            leftLeg: [595, 325],
            rightArm: [485, 275],
            body: [575, 255],
            lefrArm: [630, 265],
            head: [570, 215],
        };

        this.enemyName = new EnemyName();
        this.enemyHealth = new Health(ctx, [635, 15], this.enemyName.fullName);

        this.randomingEnemy = new RandomingEnemy(0, 2);
        this.init();
    }

    init() {
        Object.entries(this.images).forEach(entrie => {
            const enemyImage = new Image();
            enemyImage.src = entrie[1];
            this.sprites[entrie[0]] = {
                rightLeg: new Sprite(this.ctx, this.randomingEnemy.rightLeg, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                leftLeg: new Sprite(this.ctx, this.randomingEnemy.leftLeg, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                rightArm: new Sprite(this.ctx, this.randomingEnemy.rightArm, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                body: new Sprite(this.ctx, this.randomingEnemy.body, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                lefrArm: new Sprite(this.ctx, this.randomingEnemy.leftArm, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                head: new Sprite(this.ctx, this.randomingEnemy.head, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
            }

            this.attackEnemy = new AttackEnemy(this.ctx, this.images['attack']);
        });
        Object.values(this.sprites['idle']).forEach(value => {
            value.isInfinite = true;
        }) 
    }

    changeCurrrentEnemySprite(key) {
        this.currentState = key;
    }

    attack(callback, attack) {
        this.changeCurrrentEnemySprite('attack');
        setTimeout(() => {
            this.attackEnemy.triggerAttack(callback, attack);
            this.changeCurrrentEnemySprite('idle');
        }, 400);
    }

    triggerHurt() {
        this.changeCurrrentEnemySprite('hurt');
        this.enemyHealth.triggerHealthReduce();
        setTimeout(() => {
            this.changeCurrrentEnemySprite('idle');
        }, 400);
    }

    triggerDie() {
        this.changeCurrrentEnemySprite('die');
        this.isDead = true;
    }

    update(diff) {
        this.attackEnemy.update(diff);
        this.enemyHealth.update(diff);
        Object.values(this.sprites[this.currentState]).forEach(value => value.update(diff));

        if(this.enemyHealth.health <= 0 && !this.isDead) {
            this.triggerDie();
            setTimeout(() => {
                document.getElementById('nextEnemy').style.display = "block";
                document.getElementById('attack').style.display = "none";
            }, 1000);
        }
    }

    render() {
        this.attackEnemy.render();
        this.enemyHealth.render();
        Object.entries(this.sprites[this.currentState]).forEach(entrie => {
            entrie[1].render(this.positions[entrie[0]]);
        });
    }
}
