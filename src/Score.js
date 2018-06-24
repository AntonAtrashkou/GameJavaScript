import './styles/score.css';

export default class Score {
    constructor (forward) {
        this.totalScore = document.getElementById('totalScore');
        this.handleToMenu = document.getElementById('toGame').addEventListener('click', () => {
            forward();
        });

        this.handleUpdate = document.addEventListener('updateState', (e) => {
            if (e.detail.score){
                this.score = e.detail.score;
            }
            document.getElementById('totalScore').innerHTML = `${this.score}`;
                const tableBody = document.getElementById('scoreTable');
                const records = JSON.parse(localStorage.getItem('records'));
                tableBody.innerHTML = '';
                records.forEach(record => {
                    const user = document.createElement('td');
                    const score = document.createElement('td');
                    user.innerHTML = record.user;
                    score.innerHTML = record.score;

                    const tr = document.createElement('tr');
                    tr.appendChild(user);
                    tr.appendChild(score);
                    tableBody.appendChild(tr);
                });
        });
    }
}