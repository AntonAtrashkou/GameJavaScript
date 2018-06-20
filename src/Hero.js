import Sprite from './Sprite';
import AttackHero from './AttackHero';

export default class Hero {
    constructor(ctx, position, imgs) {
        this.ctx = ctx;
        this.position = position;

        this.heroSprites = {};
        this.currentState = 'idle';
        this.initHero(imgs);
    }

    initHero(imgs) {
        const heroImage = new Image();
        heroImage.src = imgs['spriteKnightImg'];
        this.heroSprites['idle'] = new Sprite(this.ctx, 5, 190, 110, heroImage, 30, [0,1,2,3,4,5,6], true);
        this.heroSprites['die'] = new Sprite(this.ctx, 200, 190, 110, heroImage, 16, [0,1,2,3,4,5,6], false);
        this.heroSprites['hurt'] = new Sprite(this.ctx, 400, 190, 110, heroImage, 12, [0,1,2,3,4,5,6], false);
        this.heroSprites['atack'] = new Sprite(this.ctx, 800, 190, 110, heroImage, 12, [0,1,2,3,4,5,6,7], false);

        this.atackHero = new AttackHero(this.ctx, imgs['spriteEffectsImg']);
    }

    changeCurrrentHeroSprite(key) {
        this.currentState = key;
    }

    atack(callback) {
        this.changeCurrrentHeroSprite('atack');
        setTimeout(() => {
            this.atackHero.triggerAtack(callback);
            this.changeCurrrentHeroSprite('idle');
        }, 500);
    }

    triggerHurt() {
        this.changeCurrrentHeroSprite('hurt');
        setTimeout(() => {
            this.changeCurrrentHeroSprite('idle');
        }, 400);
    }

    update(diff) {
        this.heroSprites[this.currentState].update(diff);
        this.atackHero.update(diff);
    }

    render() {
        this.heroSprites[this.currentState].render(this.position);
        this.atackHero.render();
    }
}