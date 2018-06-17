import Sprite from './Sprite';

export default class AttackHero {
    constructor(ctx, img) {
        this.ctx = ctx;
        this.position = [310, 400];

        this.heroAttackSprites = {};
        this.currentAttackState = 'fireball';
        this.initAttackHero(img);
    }

    initAttackHero(img) {
        const heroAttackImage = new Image();
        heroAttackImage.src = img;
        this.heroAttackSprites['pinkFire'] = new Sprite(this.ctx, 10, 80, 40, heroAttackImage, 10, [0,1,2,3,4,5], true);
        this.heroAttackSprites['greenFire'] = new Sprite(this.ctx, 80, 80, 40, heroAttackImage, 10, [0,1,2,3,4,5], true);
        this.heroAttackSprites['redFire'] = new Sprite(this.ctx, 160, 80, 40, heroAttackImage, 10, [0,1,2,3,4,5], true);
        this.heroAttackSprites['fireball'] = new Sprite(this.ctx, 240, 80, 40, heroAttackImage, 10, [0,1,2,3,4,5], true);
        this.heroAttackSprites['fireArrow'] = new Sprite(this.ctx, 320, 80, 40, heroAttackImage, 10, [0], true);
        this.heroAttackSprites['fire'] = new Sprite(this.ctx, 400, 80, 40, heroAttackImage, 10, [0], true);
        this.heroAttackSprites['fireRay'] = new Sprite(this.ctx, 480, 80, 40, heroAttackImage, 10, [0], true);
        this.heroAttackSprites['blueDrop'] = new Sprite(this.ctx, 560, 80, 40, heroAttackImage, 10, [0], true);        
    }
    changeCurrrentAttackposition() {
        this.position[0] = this.position[0] + 3;
    }

    changeCurrrentAttackHero(key) {
        this.currentAttackState = key;
    }

    update(diff) {
        this.heroAttackSprites[this.currentAttackState].update(diff);
        this.changeCurrrentAttackposition()
    }

    render() {
        this.heroAttackSprites[this.currentAttackState].render(this.position);
    }
}