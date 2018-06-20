export default class RandomingEnemy {
    constructor(min, max) {

        this.randomEnemyForm(min, max);
    }
    randomNumder (min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return rand = Math.floor(rand);
    }
    randomEnemyForm(min, max) {
        this.head = this.randomNumder(min, max) * 1257.5;
        this.body = this.randomNumder(min, max) * 1257.5 + 215;
        this.leftArm = this.randomNumder(min, max) * 1257.5 + 425;
        this.rightArm = this.randomNumder(min, max) * 1257.5 + 635;
        this.leftLeg = this.randomNumder(min, max) * 1257.5 + 845;
        this.rightLeg = this.randomNumder(min, max) * 1257.5 + 1055;
    };
}

