import Login from './Login';
import Game from './Game';
import NewGame from './NewGame';
import Score from './Score';


export default class State {
    constructor() {
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            preload: false,
            records: JSON.parse(localStorage.getItem('records')),
        }
    }

    initApp() {
        // localStorage.clear();
        this.login = new Login((newState) => {
            this.updateState(newState);
            this.goToScreen('login', 'newGame');    
        });

        this.newGame = new NewGame((newState) => {
            this.updateState(newState);
            this.goToScreen('newGame', 'game');
        });

        this.game = new Game((newState) => {
            this.updateState(newState);
            this.goToScreen('game', 'score');
        });

        this.score = new Score((newState) => {
            this.updateState(newState);
            this.goToScreen('score', 'newGame');
        });

    }

    goToScreen(idToHide, idToShow) {
        document.getElementById(idToHide).style.display = "none";
        document.getElementById(idToShow).style.display = "flex";
    }

    updateState(newState){
        if (newState) {
            this.state = Object.assign(this.state, newState);
            this.updateStateEvent = new CustomEvent('updateState', { detail: this.state });
            document.dispatchEvent(this.updateStateEvent);
        }
    }

    // saveGame() {
    //     const record = {
    //         user: this.state.firstName + ' ' + this.state.lastName,
    //         time: this.state.score,
    //     }
    //     let records = JSON.parse(localStorage.getItem('records'));
    //     if (!records) {
    //         records = [];
    //     }
    //     const index = records.findIndex(record => record.user === this.state.firstName + ' ' + this.state.lastName)
    //     if (index > -1) {
    //         if (records[index].score > this.state.score) {
    //             records[index].score = this.state.score;
    //         }
    //     } else {
    //         records.push(record);
    //     }
    //     records = records.sort((recordA, recordB) => {
    //         if (recordA.score < recordB.score) {
    //             return -1;
    //         }
    //         if (recordA.score > recordB.score) {
    //             return 1;
    //         }
    //         return 0;
    //     });

    //     if (records.length > 5) {
    //         records = records.slice(0, 5);
    //     }
    //     localStorage.setItem('records', JSON.stringify(records));
    // }
}

