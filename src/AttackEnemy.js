import Sprite from './Sprite';

export default class AttackEnemy {
    constructor(ctx, img) {
        this.ctx = ctx;
        this.position = [300, 300];

        this.enemyAttackSprites = {};
        this.currentAttackState = 'slash ';
        this.initAttackEnemy(img);

        this.isAtack = false;
    }
    
    initAttackEnemy(img) {
        const enemyAttackImage = new Image();
        enemyAttackImage.src = img;
        this.enemyAttackSprites['slash'] = new Sprite(this.ctx, 3700, 245, 150, enemyAttackImage, 10, [0], true);       
    }

    changeCurrrentAttackposition() {
        this.position[0] = this.position[0] - 3;
    }

    changeCurrrentAttackEnemy(key) {
        this.currentAttackState = key;
    }

    triggerAtack(callback) {
        this.isAtack = true;
        setTimeout(() => {
            callback();
            this.isAtack = false;
            this.position = [300, 300];
        }, 600);
    }

    update(diff) {
        if (this.isAtack) {
            this.enemyAttackSprites['slash'].update(diff);
            this.changeCurrrentAttackposition()
        }
    }

    render() {
        if (this.isAtack) {
            this.enemyAttackSprites['slash'].render(this.position);
        }
    }
}