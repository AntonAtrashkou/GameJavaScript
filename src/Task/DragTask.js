export default class DragTask {
    constructor() {
        this.dragTask = document.getElementById('dragTaskContainer');
        this.dragTask.addEventListener('dragstart', (e) => this.dragStart(e));
        this.dragTask.addEventListener('drop', (e) => this.drop(e));
        this.dragTask.addEventListener('dragover', (e) => this.allowDrop(e));

        this.attackKey = 'fireball';
    }

    init() {
        this.dragTask.style.display = 'flex';

        this.phrase = 'red';
        this.arrayOfCells = [];
        this.dragElement = null;

        // let index = Math.floor(Math.random() * this.vocabulary.length);
        // this.word = this.vocabulary[index].word;
        this.createField();
    }

    checkResult() {
        const answer = this.arrayOfCells.map(cell => cell.innerHTML).join('');
        return answer === this.phrase;
        this.dragTask.style.display = 'none';
    }

    clearFileds() {
        this.dragElement = null;
        this.dragTask.innerHTML = '';
    }

    createField() {
        this.wordContainer = document.createElement('div');
        this.wordContainer.classList.add('cells-container');
        let arrayOfLetters = this.phrase.split('');
        this.shuffleArray(arrayOfLetters);
        arrayOfLetters.forEach(item => {
            let cell = document.createElement('div');
            cell.classList.add('reorder-cell');
            cell.textContent = item;
            this.wordContainer.appendChild(cell);
            cell.setAttribute('draggable', true);
            this.arrayOfCells.push(cell);
        });
        this.dragTask.appendChild(this.wordContainer);
    }

    shuffleArray(array) {
        let i = array.length - 1
        for (i; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    allowDrop(e) {
        e.preventDefault();
    }

    dragStart(e) {
        this.dragElement = e.target;
    }

    drop(e) {
        e.preventDefault();
        if (e.target.classList.contains('reorder-cell') && this.dragElement.classList.contains('reorder-cell')) {
            let letter = e.target.textContent;
            e.target.textContent = this.dragElement.textContent;
            this.dragElement.textContent = letter;
        }
    }

}