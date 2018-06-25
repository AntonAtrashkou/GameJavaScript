import MathTask from './MathTask';

export default class Tasks {
    constructor(id, hero, enemy, callback) {
        this.allTasks = {
            "mathTask": new MathTask(1, 10),
        };
        this.disableAtckBtn = callback;
        this.task = document.getElementById('task');
        this.taskText = document.getElementById('task-text');
        this.condition = document.getElementById('task-condition');
        this.taskAnswer = document.getElementById('task-answer');
        this.acceptTaskButton = document.getElementById('accept-task');
        this.lostScreen = document.getElementById('lost-screen');
        this.wonScreen = document.getElementById('won-screen');
        this.pickMagic = document.getElementById('pickMagic');

        this.init(this.allTasks[id], hero, enemy);

    }
    init(currentTask, hero, enemy) {
        this.taskText.innerHTML =  currentTask.text;
        this.condition.innerHTML = currentTask.condition;      
        this.result = currentTask.result;
        this.heroAttackKey = currentTask.attackKey;
        this.task.style.display = 'flex';
        this.pickMagic.style.display = 'none';

        this.temp = (hero, enemy) => {
            this.disableAtckBtn();
            this.checkResult.call(this, hero, enemy);
        }
        
        this.handleClick = this.temp.bind(this, hero, enemy);
        
        this.acceptTaskButton.addEventListener('click', this.handleClick);
    }

    checkResult(hero, enemy) { 
        if (+this.taskAnswer.value === this.result) {
            this.task.style.display = 'none';
            this.wonScreen.style.display = 'block';
            setTimeout(() => {
                this.wonScreen.style.display = 'none';
                hero.attack(enemy.triggerHurt.bind(enemy), this.heroAttackKey);

            }, 500);
        } else {
            this.task.style.display = 'none';
            this.lostScreen.style.display = 'block';
            setTimeout(() => {
                this.lostScreen.style.display = 'none';
                enemy.attack(hero.triggerHurt.bind(hero));

            }, 500);
        }

        this.taskText.innerHTML = '';
        this.condition.innerHTML = ''; 
        this.taskAnswer.value = '';
        
     
        
        this.acceptTaskButton.removeEventListener('click', this.handleClick);
    }

}
