import MathTask from './Task/MathTask';
import DragTask from './Task/DragTask';

export default class Tasks {
    constructor(id, hero, enemy, callback, soundPlay) {
        this.soundPlay = soundPlay;


        switch(id) {
            case "mathTask": 
                this.currentTask = new MathTask(1, 10);
                break;
            case "dragTask":
                this.currentTask = new DragTask();
                break;
            default:
                this.currentTask = new MathTask(1, 10);
        }

        this.disableAtckBtn = callback;
        this.task = document.getElementById('task');

        this.acceptTaskButton = document.getElementById('accept-task');
        this.lostScreen = document.getElementById('lost-screen');
        this.wonScreen = document.getElementById('won-screen');
        this.pickMagic = document.getElementById('pickMagic');

        this.init(this.currentTask, hero, enemy);
    }

    init(currentTask, hero, enemy) {
        currentTask.init();
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
        if (this.currentTask.checkResult()) {
            this.task.style.display = 'none';
            this.wonScreen.style.display = 'block';
            this.soundPlay('forTheAlliance', false);
            setTimeout(() => {
                this.wonScreen.style.display = 'none';
                hero.attack(enemy.triggerHurt.bind(enemy), this.heroAttackKey);

            }, 500);
        } else {
            this.task.style.display = 'none';
            this.lostScreen.style.display = 'block';
            this.soundPlay('lokTar', false);
            setTimeout(() => {
                this.lostScreen.style.display = 'none';
                enemy.attack(hero.triggerHurt.bind(hero));
            }, 500);
        }

        this.currentTask.clearFileds();

        this.acceptTaskButton.removeEventListener('click', this.handleClick);
    }

}
