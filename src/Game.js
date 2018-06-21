import './styles/game.css';
import Background from './Background';
import Enemy from './Enemy';
import Hero from './Hero';
import AttackHero from './AttackHero';
import Tasks from './Tasks';
import Sprite from './Sprite';

export default class Game {
    constructor (forward) {
        this.forward = forward;
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 900;
        this.canvas.height = 506;
        this.ctx = canvas.getContext('2d');

        this.mainLoop = this.mainLoop.bind(this);

        this.initGame();

        this.stateSubscrioption = document.addEventListener('updateState', (e) => {
            if (e.detail.images && e.detail.images && e.detail.images) {
                this.images = e.detail.images;
                this.name = e.detail.lastName + ' ' +e.detail.firstName;
                this.createSprites();
            }
        });
    };
    
    initGame() {
        this.startButton = document.getElementById('start');
        this.attackButton = document.getElementById('attack');

        this.pickMagic = document.getElementById('pickMagic');

        this.attackSubscription = this.attackButton.addEventListener('click', () => {
            this.pickMagic.style.display = 'flex';        
        });

        this.pickMagic.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                this.Task = new Tasks(
                    e.srcElement.id,
                    this.Hero, 
                    this.Enemy,
                );
            }    
        });

        this.startButton.addEventListener('click', () => {
            this.start = Date.now();
            document.getElementById('attack').style.display = 'block';        
            this.mainLoop();
        });
    }

    mainLoop() {
        const now = Date.now();
        const diff = (now - this.start) / 1000;
        this.updateAll(diff);
        this.renderAll();
        this.start = now;
        requestAnimationFrame(this.mainLoop);
    }

    createSprites() {
        this.Hero = new Hero(this.ctx, [180, 355], this.images, this.name);
        this.Enemy = new Enemy(this.ctx, this.images);
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
    }

    renderAll() {
        this.ctx.clearRect(0, 0, 900, 506);
        this.background.render();
        this.Hero.render();
        this.Enemy.render();
    }
}
