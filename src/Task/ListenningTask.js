
import vocabulary from './vocabulary';

export default class ListenningTask {
    constructor() {
        this.speechSynt = window.speechSynthesis;
        this.listenningTask = document.getElementById('listenningTaskContainer');
        this.playBut = document.getElementById('listen-button');
        this.taskAnswer = document.getElementById('listen-answer');
        this.vocabulary = vocabulary;
        this.handleClick = this.playWord.bind(this);
        this.playBut.addEventListener('click', this.handleClick);

        this.attackKey = 'fireArrow';
    }

    init() {
        this.listenningTask.style.display = 'flex';
        let index = Math.floor(Math.random() * this.vocabulary.length);
        this.word = this.vocabulary[index].word;
    }

    playWord() {
        this.speech = new SpeechSynthesisUtterance(this.word);
        this.voices = this.speechSynt.getVoices();
        this.speech.voice = this.voices[2];
        this.speechSynt.speak(this.speech);
        console.log(1);
    }

    clearFileds() {
        this.playBut.removeEventListener('click', this.handleClick);
        this.listenningTask.style.display = 'none';
        this.taskAnswer.value = '';
    }

    checkResult() {
        let answer = this.taskAnswer.value.toLowerCase();
        if (answer === this.word) {
            return true;
        } else return false;
    }
}
