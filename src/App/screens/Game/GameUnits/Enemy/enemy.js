import Sprite from '../../Sprite/sprite';
import AttackEnemy from './attackEnemy';
import Health from '../Health/Health';

export default class Enemy {
    constructor(ctx, imgs, soundPlay) {
        this.ctx = ctx;
        this.soundPlay = soundPlay;
        this.enemyPartsName = {
            names : ['Crag', 'Straker', 'Sandro', 'Dace', 'Gunnar', 'Jabarkas', 'Galthran', 'Vokial', 'Xyron', 'Calh', 'Solmyr'],
            characters :['vile', 'awful', 'creepy', 'rotten', 'gruesome', 'hateful', 'horrific', 'cloying', 'nasty', 'icky'],
            nouns : ['goblin', 'orc', 'troll', 'monster', 'bastard', 'warrior', 'freak', 'flayer', 'butcher','cannibal'],
        };
        this.images = {
            'idle': imgs['spriteTrollStaticImg'],
            'die': imgs['spriteTrollDieImg'],
            'hurt': imgs['spriteTrollHurtImg'],
            'attack': imgs['spriteTrollAttackImg'],
        };
        this.sprites = {};
        this.currentState = 'idle';
        this.isDead = false;
        this.positions = {
            rightLeg: [560, 325],
            leftLeg: [595, 325],
            rightArm: [485, 275],
            body: [575, 255],
            lefrArm: [630, 265],
            head: [570, 215],
        };
        
        this.createEnemyName();
        this.createEnemyBody(3);

        this.enemyHealth = new Health(ctx, [635, 15], this.enemyFullName);

        this.init();
    }

    init() {
        Object.entries(this.images).forEach(entrie => {
            const enemyImage = new Image();
            enemyImage.src = entrie[1];
            this.sprites[entrie[0]] = {
                rightLeg: new Sprite(this.ctx, this.rightLeg, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                leftLeg: new Sprite(this.ctx, this.leftLeg, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                rightArm: new Sprite(this.ctx, this.rightArm, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                body: new Sprite(this.ctx, this.body, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                lefrArm: new Sprite(this.ctx, this.leftArm, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
                head: new Sprite(this.ctx, this.head, 210, 210, enemyImage, 7, [0,1,2,3,4], false),
            }

            this.attackEnemy = new AttackEnemy(this.ctx, this.images['attack']);
        });
        Object.values(this.sprites['idle']).forEach(value => {
            value.isInfinite = true;
        }) 
    }
    
    randomPart (parts) {
        let rand = Math.floor( Math.random() * (parts));
        return rand;
    }

    createEnemyName() { 
        this.enemyFullName = '';
        Object.values(this.enemyPartsName).forEach(entrie => {
            let rand = this.randomPart(entrie.length);
            this.enemyFullName +=' ' + entrie[rand];
            console.log(this.enemyFullName);
        });
    }

    createEnemyBody(bodyShapes) {
        this.head = this.randomPart(bodyShapes) * 1260 + 10;
        this.body = this.randomPart(bodyShapes) * 1260 + 215;
        this.leftArm = this.randomPart(bodyShapes) * 1260 + 425;
        this.rightArm = this.randomPart(bodyShapes) * 1260 + 635;
        this.leftLeg = this.randomPart(bodyShapes) * 1260 + 845;
        this.rightLeg = this.randomPart(bodyShapes) * 1260 + 1055;
    };

    changeCurrrentEnemySprite(key) {
        this.currentState = key;
    }

    attack(callback, attack) {
        this.changeCurrrentEnemySprite('attack');
        setTimeout(() => {
            this.attackEnemy.triggerAttack(callback, attack);
            this.changeCurrrentEnemySprite('idle');
            this.soundPlay('cuseMe', false);
        }, 400);
    }

    triggerHurt() {
        this.changeCurrrentEnemySprite('hurt');
        this.enemyHealth.triggerHealthReduce();
        setTimeout(() => {
            this.changeCurrrentEnemySprite('idle');
            this.soundPlay('enemyHurt', false);
        }, 400);
    }

    triggerDie() {
        this.changeCurrrentEnemySprite('die');
        this.soundPlay('enemyDead', false);
        this.isDead = true;
    }

    update(diff) {
        this.attackEnemy.update(diff);
        this.enemyHealth.update(diff);
        Object.values(this.sprites[this.currentState]).forEach(value => value.update(diff));

        if(this.enemyHealth.health <= 0 && !this.isDead) {
            this.triggerDie();
            document.getElementById('attack').style.display = "none";
            setTimeout(() => {
                document.getElementById('nextEnemy').style.display = "block";
            }, 1000);
        }
    }

    render() {
        this.attackEnemy.render();
        this.enemyHealth.render();
        Object.entries(this.sprites[this.currentState]).forEach(entrie => {
            entrie[1].render(this.positions[entrie[0]]);
        });
    }
}
