export default class MathTask {
    constructor(min, max) {
        this.mathTask = document.getElementById('mathTaskContainer');

        this.condition = document.getElementById('mathTask-condition');
        this.taskAnswer = document.getElementById('mathTask-answer');

        this.attackKey = 'pinkFire';
        this.operators =['+', '-', '*', '/'];
        this.firstOperand = this.generateRandomInteger(min, max);
        this.secondOperand = this.generateRandomInteger(min, max);
        this.generateOperator();
        this.generateResult(this.operator);
        this.conditionText = `${this.firstOperand} ${this.operator} ${this.secondOperand }`;
    }

    init() {
        this.mathTask.style.display = 'flex';
        this.condition.innerHTML = this.conditionText;
    }

    checkResult() {
        return +this.taskAnswer.value === this.result;
    }
    
    clearFileds() {
        this.mathTask.style.display = 'none';
        this.condition.innerHTML = ''; 
        this.taskAnswer.value = '';
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