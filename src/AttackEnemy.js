import Sprite from './Sprite';

export default class AttackEnemy {
    constructor(ctx, img) {
        this.ctx = ctx;
        this.position = [340, 380];

        this.enemyAttackSprites = {};
        this.currentAttackState = 'slash ';
        this.initAttackEnemy(img);

        this.isAttack = false;
    }
    
    initAttackEnemy(img) {
        const enemyAttackImage = new Image();
        enemyAttackImage.src = img;
        this.enemyAttackSprites['slash'] = new Sprite(this.ctx, 3800, 200, 150, enemyAttackImage, 15, [0,1,2,3,4,5,6,7,8], true);       
    }

    changeCurrrentAttackposition() {
        this.position[0] = this.position[0] - 3;
    }

    changeCurrrentAttackEnemy(key) {
        this.currentAttackState = key;
    }

    triggerAttack(callback) {
        this.isAttack = true;
        setTimeout(() => {
            callback();
            this.isAttack = false;
            this.position = [300, 380];
        }, 600);
    }

    update(diff) {
        if (this.isAttack) {
            this.enemyAttackSprites['slash'].update(diff);
            this.changeCurrrentAttackposition()
        }
    }

    render() {
        if (this.isAttack) {
            this.enemyAttackSprites['slash'].render(this.position);
        }
    }
}