export default class RandomingEnemy {
    constructor(min, max) {

        this.randomEnemyForm(min, max);
    }
    randomNumder (min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return rand = Math.floor(rand);
    }
    randomEnemyForm(min, max) {
        this.head = this.randomNumder(min, max) * 1255;
        this.body = this.randomNumder(min, max) * 1255 + 215;
        this.leftArm = this.randomNumder(min, max) * 1255 + 425;
        this.rightArm = this.randomNumder(min, max) * 1255 + 635;
        this.leftLeg = this.randomNumder(min, max) * 1255 + 845;
        this.rightLeg = this.randomNumder(min, max) * 1255 + 1055;
    };
}

