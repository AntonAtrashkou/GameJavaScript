import './styles/game.css';
import Background from './Background';
import Enemy from './Enemy';
import Hero from './Hero';
import AttackHero from './AttackHero';
import Sprite from './Sprite';

export default class Game {
    constructor (forward) {
        this.forward = forward;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 900;
        this.canvas.height = 506;
        this.ctx = canvas.getContext('2d');

        this.mainLoop = this.mainLoop.bind(this);
        this.startButton = document.getElementById('start');
        this.start = Date.now();
        this.startButton.addEventListener('click', () => {
            
            this.mainLoop();

            setTimeout(() => {
                this.Hero.changeCurrrentHeroSprite('die');
            }, 5000);
        });

        this.stateSubscrioption = document.addEventListener('updateState', (e) => {
            if (e.detail.images) {
                this.images = e.detail.images;
                this.createSprites();
            } 
        });
    };



    mainLoop() {
        const now = Date.now();
        const diff = (now - this.start) / 1000;
        this.updateAll(diff);
        this.renderAll();
        this.start = now;
        requestAnimationFrame(this.mainLoop);
    }

    createSprites() {
        // 0 1255
        this.Hero = new Hero(this.ctx, [180, 355], this.images['spriteKnightImg']);
        this.Enemy = new Enemy(this.ctx, this.images['spriteTrollHurtImg']);
        this.AttackHero = new AttackHero(this.ctx, this.images['spriteEffectsImg']);
        const backgroundImage = new Image();
        backgroundImage.src = this.images['bgdImg'];
        this.background = new Background(
            new Sprite(this.ctx, 0, 900, 506, backgroundImage, 1, [0]),
            [0, 0],
        );
    }

    updateAll(diff) {
        this.background.update(diff);
        this.Hero.update(diff);
        this.Enemy.update(diff);
        this.AttackHero.update(diff);

    }

    renderAll() {
        this.ctx.clearRect(0, 0, 900, 506);
        this.background.render();
        this.Hero.render();
        this.Enemy.render();
        this.AttackHero.render();
    }
}

// this.enemyHead = new Enemy(
//     new Sprite(this.ctx, 0, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [495, 215],
// );
// this.enemyBody = new Enemy(
//     new Sprite(this.ctx, 215, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [500, 255],
// );
// this.enemyLeftArm = new Enemy(
//     new Sprite(this.ctx, 425, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [555, 265],
// );
// this.enemyRightArm = new Enemy(
//     new Sprite(this.ctx, 635, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [410, 275],
// );
// this.enemyLeftLeg = new Enemy(
//     new Sprite(this.ctx, 845, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [520, 325],
// );
// this.enemyRightLeg = new Enemy(
//     new Sprite(this.ctx, 1055, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [485, 325],
// );
// const backgroundImage = new Image();
// backgroundImage.src = this.images['bgdImg'];
// this.background = new Background(
//     new Sprite(this.ctx, 0, 900, 506, backgroundImage, 12, [0]),
//     [0, 0],
// );

// this.enemyHead = new Enemy(
//     new Sprite(this.ctx, 1255, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [495, 215],
// );
// this.enemyBody = new Enemy(
//     new Sprite(this.ctx, 1470, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [500, 255],
// );
// this.enemyLeftArm = new Enemy(
//     new Sprite(this.ctx, 1680, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [555, 265],
// );
// this.enemyRightArm = new Enemy(
//     new Sprite(this.ctx, 1890, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [410, 275],
// );
// this.enemyLeftLeg = new Enemy(
//     new Sprite(this.ctx, 2100, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [520, 325],
// );
// this.enemyRightLeg = new Enemy(
//     new Sprite(this.ctx, 2310, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [485, 325],
// );
// const backgroundImage = new Image();
// backgroundImage.src = this.images['bgdImg'];
// this.background = new Background(
//     new Sprite(this.ctx, 0, 900, 506, backgroundImage, 1, [0]),
//     [0, 0],
// );

// this.enemyHead = new Enemy(
//     new Sprite(this.ctx, 2510, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [495, 215],
// );
// this.enemyBody = new Enemy(
//     new Sprite(this.ctx, 2725, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [500, 255],
// );
// this.enemyLeftArm = new Enemy(
//     new Sprite(this.ctx, 2935, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [555, 265],
// );
// this.enemyRightArm = new Enemy(
//     new Sprite(this.ctx, 3145, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [410, 275],
// );
// this.enemyLeftLeg = new Enemy(
//     new Sprite(this.ctx, 3355, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [520, 325],
// );
// this.enemyRightLeg = new Enemy(
//     new Sprite(this.ctx, 3565, 210, 210, enemyImage, 1, [0,1,2,3,4]),
//     [485, 325],
// );
// const backgroundImage = new Image();
// backgroundImage.src = this.images['bgdImg'];
// this.background = new Background(
//     new Sprite(this.ctx, 0, 900, 506, backgroundImage, 1, [0]),
//     [0, 0],
// );