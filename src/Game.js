import './styles/game.css';
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
        this.hero = new Hero(
            new Sprite(this.ctx, 94, 67, heroImage, 16, [0,1,2,3]),
            [100, 100],
        );
        // this.enimy = new Enimy(
        //     new Sprite(this.ctx, 94, 67, ),
        //     [100, 100],
        // );
    }

    updateAll(diff) {
        this.hero.update(diff);
    }

    renderAll() {
        this.ctx.clearRect(0, 0, 800, 600);
        this.hero.render();
    }
}
