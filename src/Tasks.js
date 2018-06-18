import MathTask from './MathTask';

export default class Tasks {
    constructor(id, heroAttack, enemyAttack) {
        this.allTasks = {
            "mathMagic": new MathTask(1, 10),
        };
        this.task = document.getElementById('task');
        this.taskAnswer = document.getElementById('task-answer');
        this.acceptTaskButton = document.getElementById('accept-task');

        this.lostScreen = document.getElementById('lost-screen');
        this.wonScreen = document.getElementById('won-screen');

        this.init(this.allTasks[id]);
        this.checkResult(heroAttack, enemyAttack);
    }
    init(currentTask) {
        this.taskText = document.createElement('div');
        this.taskText.innerHTML =  currentTask.text;
        this.condition = document.createElement('div');
        this.condition.innerHTML = currentTask.condition; 
        this.resul = currentTask.resul;
        this.task.appendChild(this.taskText);
        this.task.appendChild(this.condition);
        this.task.style.display = 'block';
    }

    checkResult(heroAttack, enemyAttack) { 
        this.accept = this.acceptTaskButton.addEventListener('click', () => {        
            if (this.taskAnswer.value === this.result) {
                this.task.style.display = 'none';
                this.wonScreen.style.display = 'block';
                setTimeout(() => {
                    this.wonScreen.style.display = 'none';
                }, 2000);
                this.heroAttack = heroAttack();
            } else {
                this.task.style.display = 'none';
                this.lostScreen.style.display = 'block';
                setTimeout(() => {
                    this.lostScreen.style.display = 'none';
                }, 2000);
                this.enemyAttack = enemyAttack();
            } 
        });           
    }
}
