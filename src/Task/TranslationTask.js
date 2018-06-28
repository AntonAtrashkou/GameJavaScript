import vocabulary from './vocabulary';

export default class TranslationTask {
    constructor() {
        this.translationTask = document.getElementById('translationTaskContainer');
        this.condition = document.getElementById('translation-condition');
        this.taskAnswer = document.getElementById('translation-answer');

        this.vocabulary = vocabulary;

        this.attackKey = 'greenFire';
    }

    init() {
        this.translationTask.style.display = 'flex';
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
        this.translations = this.vocabulary[index].translation;
        this.condition.innerHTML =  this.word.toUpperCase();
    }

    clearFileds() {
        this.translationTask.style.display = 'none';
        this.condition.innerHTML = ''; 
        this.taskAnswer.value = '';
    }

    checkResult() {
        this.answer = this.taskAnswer.value.toLowerCase();
        if (this.translations.indexOf(this.answer) !== -1) {
           return true;
        } else return false;
    }
}
