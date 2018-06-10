import './styles/game.css';
import Background from './Background';
import Enemy from './Enemy';
import Hero from './Hero';
import Sprite from './Sprite';

export default class Game {
    constructor (forward) {
        this.forward = forward;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.ctx = canvas.getContext('2d');

        this.mainLoop = this.mainLoop.bind(this);
        this.startButton = document.getElementById('start');
        this.start = Date.now();
        this.startButton.addEventListener('click', () => {
            
            this.createSprites();
            this.mainLoop();
        });

        this.stateSubscrioption = document.addEventListener('updateState', (e) => {
            if (e.detail.images) {
                this.images = e.detail.images;
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
        const heroImage = new Image();
        heroImage.src = this.images['spriteKnightImg'];
        this.heroStatic = new Hero(
            new Sprite(this.ctx, 5, 190, 110, heroImage, 12, [0,1,2,3,4,5,6]),
            [180, 400],
        );
        this.heroDie = new Hero(
            new Sprite(this.ctx, 200, 190, 110, heroImage, 12, [0,1,2,3,4,5,6]),
            [200, 0],
        );
        this.heroHurt = new Hero(
            new Sprite(this.ctx, 400, 190, 110, heroImage, 12, [0,1,2,3,4,5,6]),
            [0, 200],
        );
        this.heroAttack = new Hero(
            new Sprite(this.ctx, 800, 190, 110, heroImage, 12, [0,1,2,3,4,5,6,7]),
            [200, 200],
        );
        const enemyImage = new Image();
        enemyImage.src = this.images['spriteTrollsImg'];
        this.enemyHead = new Enemy(
            new Sprite(this.ctx, 0, 110, 120, enemyImage, 12, [0]),
            [495, 310],
        );
        this.enemyBody = new Enemy(
            new Sprite(this.ctx, 115, 120, 150, enemyImage, 12, [0]),
            [500, 340],
        );
        this.enemyLeftArm = new Enemy(
            new Sprite(this.ctx, 255, 75, 135, enemyImage, 12, [0]),
            [570, 360],
        );
        this.enemyRightArm = new Enemy(
            new Sprite(this.ctx, 345, 165, 120, enemyImage, 12, [0]),
            [415, 380],
        );
        this.enemyLeftLeg = new Enemy(
            new Sprite(this.ctx, 510, 50, 70, enemyImage, 12, [0]),
            [550, 450],
        );
        this.enemyRightLeg = new Enemy(
            new Sprite(this.ctx, 560, 40, 70, enemyImage, 15, [0]),
            [515, 450],
        );
        const backgroundImage = new Image();
        backgroundImage.src = this.images['bgdImg'];
        this.background = new Background(
            new Sprite(this.ctx, 0, 1920, 1080, backgroundImage, 12, [0]),
            [0, 0],
        );
    }

    updateAll(diff) {
        this.background.update(diff);
        this.heroStatic.update(diff);
        // this.heroDie.update(diff);
        // this.heroHurt.update(diff);
        // this.heroAttack.update(diff);
        this.enemyRightLeg.update(diff);
        this.enemyLeftLeg.update(diff);
        this.enemyRightArm.update(diff);
        this.enemyBody.update(diff);
        this.enemyLeftArm.update(diff);
        this.enemyHead.update(diff);
    }

    renderAll() {
        this.ctx.clearRect(0, 0, 800, 600);
        this.background.render();
        this.heroStatic.render();
        // this.heroDie.render();
        // this.heroHurt.render();
        // this.heroAttack.render();
        this.enemyRightLeg.render();
        this.enemyLeftLeg.render();
        this.enemyRightArm.render();
        this.enemyBody.render();
        this.enemyLeftArm.render();
        this.enemyHead.render();
    }
}

// const enemyImage = new Image();
// enemyImage.src = this.images['spriteTrollsImg'];
// this.enemyHead = new Enemy(
//     new Sprite(this.ctx, 0, 110, 120, enemyImage, 15, [0]),
//     [95, 10],
// );
// this.enemyBody = new Enemy(
//     new Sprite(this.ctx, 115, 120, 150, enemyImage, 15, [0]),
//     [100, 40],
// );
// this.enemyLeftArm = new Enemy(
//     new Sprite(this.ctx, 255, 75, 135, enemyImage, 15, [0]),
//     [170, 60],
// );
// this.enemyRightArm = new Enemy(
//     new Sprite(this.ctx, 345, 165, 120, enemyImage, 15, [0]),
//     [15, 80],
// );
// this.enemyLeftLeg = new Enemy(
//     new Sprite(this.ctx, 510, 50, 70, enemyImage, 15, [0]),
//     [150, 150],
// );
// this.enemyRightLeg = new Enemy(
//     new Sprite(this.ctx, 560, 40, 70, enemyImage, 15, [0]),
//     [115, 150],
// );