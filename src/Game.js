import './styles/game.css';
import './styles/score.css';
import Background from './Background';
import Enemy from './Enemy';
import Hero from './Hero';
// import AttackHero from './AttackHero';
import Tasks from './Tasks';
import Sprite from './Sprite';

export default class Game {
    constructor (forward) {
        this.forward = forward;
        this.gameRules = document.getElementById('game-rules');
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 900;
        this.canvas.height = 506;
        this.ctx = canvas.getContext('2d');
        this.isStart = false;
        this.mainLoop = this.mainLoop.bind(this);

        this.initGame();
        document.addEventListener('updateState', (e) => {
            if (e.detail.images && !this.isStart) {
                this.images = e.detail.images;
                this.sounds = e.detail.sounds;
                this.name = e.detail.lastName + ' ' +e.detail.firstName;
                this.createSprites();
            }
        });
    };
    
    initGame() {
        this.pickMagic = document.getElementById('pickMagic');
        this.nextEnemy = document.getElementById('nextEnemy');
        this.attackButt = document.getElementById('attack');
        this.attackButt.addEventListener('click', () => {
            this.pickMagic.style.display = 'flex';        
        });

        document.getElementById('start').addEventListener('click', () => {
            this.soundPlay('mainSound', true);
            document.getElementById('game-startScreen').style.display = 'none';
            document.getElementById('game-activeScreen').style.display = 'flex';   
            this.start = Date.now();
            this.isStart = true;
            this.mainLoop();
        });

        this.pickMagic.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                this.Task = new Tasks(
                    e.srcElement.id,
                    this.Hero, 
                    this.Enemy,
                    this.disableAtckBtn.bind(this),
                    this.soundPlay.bind(this),
                );
            }
        });

        this.nextEnemy.addEventListener('click', () => {
            this.soundPlay('enemyOK', false);
            this.Enemy = new Enemy(this.ctx, this.images, this.soundPlay.bind(this));
            setTimeout(() => {
                document.getElementById('nextEnemy').style.display = 'none';
                this.attackButt.style.display = 'block';  
            }, 100);
        })

        document.getElementById('toGame').addEventListener('click', () => {
            window.updateState();
            document.getElementById('totalScore').innerHTML = "0";
            document.getElementById('score').style.display = "none";
        });
    }

    disableAtckBtn () {
        this.attackButt.disabled = true;
        setTimeout(() => {
            this.attackButt.disabled = false;
        }, 4000);
    }

    mainLoop() {
        if (this.isStart) {
            const now = Date.now();
            const diff = (now - this.start) / 1000;
            this.updateAll(diff);
            this.renderAll();
            this.start = now;
            requestAnimationFrame(this.mainLoop);
        }
    }

    soundPlay(sound, repeatSound) {
        this.sound = new Audio();
        this.sound.src = this.sounds[sound];
        this.sound.volume= 0.1;
        if(repeatSound) {
            this.sound.loop = true;
        }
        this.sound.play();
    }

    createSprites() {
        this.Hero = new Hero(this.ctx, [190, 355], this.images, this.name, this.soundPlay.bind(this));
        this.Enemy = new Enemy(this.ctx, this.images, this.soundPlay.bind(this));
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
