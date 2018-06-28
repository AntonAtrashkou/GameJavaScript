import Sprite from './Sprite';
import AttackHero from './AttackHero';
import Health from './Health';

export default class Hero {
    constructor(ctx, position, imgs, name, soundPlay) {
        this.isDead = false;
        this.score = 0;

        this.tableScoreItems = document.getElementsByClassName('table-score-item');


        this.soundPlay = soundPlay;
        this.ctx = ctx;
        this.position = position;
        this.heroSprites = {};
        this.currentState = 'idle';
        this.initHero(imgs);
        this.heroHealth = new Health(ctx, [15, 15], `${name}`,);

        this.records = null;

        document.addEventListener('updateState', (e) => {
            if (e.detail.records) {
                this.records = e.detail.records;
                this.updateTableScore();
            }
        });

    }

    saveScore(score) {
        window.updateState({ score });
    }

    initHero(imgs) {
        const heroImage = new Image();
        heroImage.src = imgs['spriteKnightImg'];
        this.heroSprites['idle'] = new Sprite(this.ctx, 5, 190, 110, heroImage, 20, [0,1,2,3,4,5,6], true);
        this.heroSprites['die'] = new Sprite(this.ctx, 200, 190, 110, heroImage, 16, [0,1,2,3,4,5,6], false);
        this.heroSprites['hurt'] = new Sprite(this.ctx, 400, 190, 110, heroImage, 12, [0,1,2,3,4,5,6], false);
        this.heroSprites['attack'] = new Sprite(this.ctx, 800, 190, 110, heroImage, 12, [0,1,2,3,4,5,6,7], false);

        this.attackHero = new AttackHero(this.ctx, imgs['spriteEffectsImg']);
    }

    changeCurrrentHeroSprite(key) {
        this.currentState = key;
    }
 
    attack(callback, attackKey) {
        this.changeCurrrentHeroSprite('attack');
        setTimeout(() => {
            this.score += 10;
            this.attackHero.triggerAttack(callback, attackKey);
            this.changeCurrrentHeroSprite('idle');
            this.soundPlay('heroAttack', false);
        }, 500);
    }

    triggerHurt() {
        this.changeCurrrentHeroSprite('hurt');
        setTimeout(() => {
            this.changeCurrrentHeroSprite('idle');
            this.heroHealth.triggerHealthReduce();
            this.soundPlay('heroHurt', false);
        }, 400);
    }

    triggerDie() {
        this.changeCurrrentHeroSprite('die');
        this.soundPlay('heroDead', false);
        this.isDead = true;
        this.saveScore(this.score);
    }

    clearScoreTable() {
        for(let i = 0; i < 5; i++) {
            this.tableScoreItems[i].innerHTML = '';
        }
    }



    updateTableScore() {
        this.clearScoreTable();
        debugger;
        const values = Object.values(this.records).map(value => {
            return {
                name: value.firstName + value.lastName,
                score: value.score,
            }
        }).sort((a, b) => {
            if (+a.score < +b.score) {
                return 1;
            }
            if (+a.score > +b.score) {
                return -1;
            }
            return 0;
        });

        for(let i = 0; i < 5; i++) {
            const name = document.createElement('span');
            const score = document.createElement('span');
            name.innerHTML = values[i].name;
            score.innerHTML = values[i].score;
            this.tableScoreItems[i].appendChild(name);
            this.tableScoreItems[i].appendChild(score);
        }
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