import MathTask from './MathTask';

export default class Tasks {
    constructor(id, hero, enemy) {
        this.allTasks = {
            "mathTask": new MathTask(1, 10),
        };
        this.task = document.getElementById('task');
        this.taskAnswer = document.getElementById('task-answer');
        this.acceptTaskButton = document.getElementById('accept-task');

        this.lostScreen = document.getElementById('lost-screen');
        this.wonScreen = document.getElementById('won-screen');

        this.init(this.allTasks[id]);
        this.setCheckResult(hero, enemy);
    }
    init(currentTask) {
        this.taskText = document.createElement('div');
        this.taskText.innerHTML =  currentTask.text;
        this.condition = document.createElement('div');
        this.condition.innerHTML = currentTask.condition;      
        this.result = currentTask.result;
        this.task.appendChild(this.taskText);
        this.task.appendChild(this.condition);
        this.task.style.display = 'block';
    }

    setCheckResult(hero, enemy) { 
        this.accept = this.acceptTaskButton.addEventListener('click', () => {
            if (+this.taskAnswer.value === this.result) {
                this.task.style.display = 'none';
                this.wonScreen.style.display = 'block';
                setTimeout(() => {
                    this.wonScreen.style.display = 'none';

                    hero.atack(enemy.triggerHurt.bind(enemy));

                }, 2000);
            } else {
                this.task.style.display = 'none';
                this.lostScreen.style.display = 'block';
                setTimeout(() => {
                    this.lostScreen.style.display = 'none';
                    
                    enemy.atack(hero.triggerHurt.bind(hero));

                }, 2000);
            } 
        });
               
    }
}
