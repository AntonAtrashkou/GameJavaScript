import Sprite from './Sprite';

export default class Hero {
    constructor(ctx, position, img) {
        this.ctx = ctx;
        this.position = position;

        this.heroSprites = {};
        this.currentState = 'idle';
        this.initHero(img);
    }

    initHero(img) {
        const heroImage = new Image();
        heroImage.src = img;
        this.heroSprites['idle'] = new Sprite(this.ctx, 5, 190, 110, heroImage, 16, [0,1,2,3,4,5,6], true);
        this.heroSprites['die'] = new Sprite(this.ctx, 200, 190, 110, heroImage, 16, [0,1,2,3,4,5,6], false);
        this.heroSprites['hurt'] = new Sprite(this.ctx, 400, 190, 110, heroImage, 12, [0,1,2,3,4,5,6]);
        this.heroSprites['atack'] = new Sprite(this.ctx, 800, 190, 110, heroImage, 12, [0,1,2,3,4,5,6,7]);
    }

    changeCurrrentHeroSprite(key) {
        this.currentState = key;
    }

    update(diff) {
        this.heroSprites[this.currentState].update(diff);
    }

    render() {
        this.heroSprites[this.currentState].render(this.position);
    }
}