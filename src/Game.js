import './styles/game.css';
import Background from './Background';
import Enemy from './Enemy';
import Hero from './Hero';
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
            [180, 355],
        );
        this.heroDie = new Hero(
            new Sprite(this.ctx, 200, 190, 110, heroImage, 12, [0,1,2,3,4,5,6]),
            [180, 355],
        );
        this.heroHurt = new Hero(
            new Sprite(this.ctx, 400, 190, 110, heroImage, 12, [0,1,2,3,4,5,6]),
            [180, 355],
        );
        this.heroAttack = new Hero(
            new Sprite(this.ctx, 800, 190, 110, heroImage, 12, [0,1,2,3,4,5,6,7]),
            [180, 355],
        );
        const enemyImage = new Image();
        // enemyImage.src = this.images['spriteTrollStaticImg'];
        enemyImage.src = this.images['spriteTrollDieImg'];

        // 0 1255
this.enemyHead = new Enemy(
    new Sprite(this.ctx, 2510, 210, 210, enemyImage, 1, [0,1,2,3,4]),
    [495, 215],
);
this.enemyBody = new Enemy(
    new Sprite(this.ctx, 2725, 210, 210, enemyImage, 1, [0,1,2,3,4]),
    [500, 255],
);
this.enemyLeftArm = new Enemy(
    new Sprite(this.ctx, 2935, 210, 210, enemyImage, 1, [0,1,2,3,4]),
    [555, 265],
);
this.enemyRightArm = new Enemy(
    new Sprite(this.ctx, 3145, 210, 210, enemyImage, 1, [0,1,2,3,4]),
    [410, 275],
);
this.enemyLeftLeg = new Enemy(
    new Sprite(this.ctx, 3355, 210, 210, enemyImage, 1, [0,1,2,3,4]),
    [520, 325],
);
this.enemyRightLeg = new Enemy(
    new Sprite(this.ctx, 3565, 210, 210, enemyImage, 1, [0,1,2,3,4]),
    [485, 325],
);
const backgroundImage = new Image();
backgroundImage.src = this.images['bgdImg'];
this.background = new Background(
    new Sprite(this.ctx, 0, 900, 506, backgroundImage, 1, [0]),
    [0, 0],
);

    }

    updateAll(diff) {
        this.background.update(diff);
        this.heroAttack.update(diff);
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
        this.ctx.clearRect(0, 0, 900, 506);
        this.background.render();
        this.heroAttack.render();
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