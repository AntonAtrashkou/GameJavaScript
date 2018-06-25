import Sprite from './Sprite';
import AttackHero from './AttackHero';
import Health from './Health';

export default class Hero {
    constructor(ctx, position, imgs, name, sounds) {
        this.isDead = false;
        this.score = 0;
        this.sounds = sounds;
        this.ctx = ctx;
        this.position = position;
        this.heroSprites = {};
        this.currentState = 'idle';
        this.initHero(imgs);
        this.heroHealth = new Health(ctx, [15, 15], `${name}`,);
    }

    initHero(imgs) {
        const heroImage = new Image();
        heroImage.src = imgs['spriteKnightImg'];
        this.heroSprites['idle'] = new Sprite(this.ctx, 5, 190, 110, heroImage, 20, [0,1,2,3,4,5,6], true);
        this.heroSprites['die'] = new Sprite(this.ctx, 200, 190, 110, heroImage, 16, [0,1,2,3,4,5,6], false);
        this.heroSprites['hurt'] = new Sprite(this.ctx, 400, 190, 110, heroImage, 12, [0,1,2,3,4,5,6], false);
        this.heroSprites['attack'] = new Sprite(this.ctx, 800, 190, 110, heroImage, 12, [0,1,2,3,4,5,6,7], false);

        this.attackHero = new AttackHero(this.ctx, imgs['spriteEffectsImg']);

        this.attackSound = new Audio();
        this.attackSound.src = this.sounds[0];
    }

    changeCurrrentHeroSprite(key) {
        this.currentState = key;
    }

    attack(callback, attackKey) {
        this.attackSound.play();
        this.changeCurrrentHeroSprite('attack');
        setTimeout(() => {
            this.score += 10;
            this.attackHero.triggerAttack(callback, attackKey);
            this.changeCurrrentHeroSprite('idle');
        }, 500);
    }

    triggerHurt() {
        this.changeCurrrentHeroSprite('hurt');
        setTimeout(() => {
            this.changeCurrrentHeroSprite('idle');
            this.heroHealth.triggerHealthReduce();
        }, 400);
    }

    triggerDie() {
        this.changeCurrrentHeroSprite('die');
        this.isDead = true;
    }

    update(diff) {
        this.heroHealth.update(diff);
        this.heroSprites[this.currentState].update(diff);
        this.attackHero.update(diff);

        if(this.heroHealth.health <= 0 && !this.isDead) {
            this.triggerDie();
            setTimeout(() => {
                document.getElementById('totalScore').innerHTML = `${this.score}`;
                document.getElementById('score').style.display = "flex";
            }, 1000);
        }
    }

    render() {
        this.heroHealth.render();
        this.heroSprites[this.currentState].render(this.position);
        this.attackHero.render();
        this.ctx.font = "30px cursive, sans-serif";
        this.ctx.fillText(`Score : ${this.score}`, 382, 70);
    }
}