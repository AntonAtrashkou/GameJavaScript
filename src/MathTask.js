export default class MathTask {
    constructor(min, max) {
        this.attackKey = 'pinkFire';
        this.operators =['+', '-', '*', '/'];
        this.firstOperand = this.generateRandomInteger(min, max);
        this.secondOperand = this.generateRandomInteger(min, max);
        this.generateOperator();
        this.generateResult(this.operator);
        this.condition = `${this.firstOperand} ${this.operator} ${this.secondOperand }`;
        this.text = 'wqeqweqweqweqwe';
    }

    generateRandomInteger (min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return rand = Math.floor(rand);
    }

    generateOperator() {
        this.operator = this.operators[this.generateRandomInteger(0, 3)];
        if (this.operator === '/') {
            this.firstOperand = this.firstOperand * this.secondOperand;
        }
    }

    generateResult(operator) {
        switch(operator) {
            case '-':
                this.result = this.firstOperand - this.secondOperand;
                break;
            case '+':
                this.result = this.firstOperand + this.secondOperand;
                break;
            case '*':
                this.result = this.firstOperand * this.secondOperand;
                break;
            case '/':
                this.result = this.firstOperand / this.secondOperand;
                break;
        }
    }
}