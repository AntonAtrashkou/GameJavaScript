import Login from './Login';
import Game from './Game';
import NewGame from './NewGame';


export default class State {
    constructor() {
        localStorage.removeItem('store');
        this.state = {
            firstName: '',
            lastName: '',
            score: 0,
            email: '',
            preload: false,
            records: this.getRecords(),
        }
        window.updateState = this.updateState.bind(this);
    }

    initApp() {
        
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

    }

    goToScreen(idToHide, idToShow) {
        document.getElementById(idToHide).style.display = "none";
        document.getElementById(idToShow).style.display = "flex";
    }

    saveRecords() {
        let totalScore = this.state.score;
        if (this.state.records[this.state.email]) {
            if (this.state.score < this.state.records[this.state.email].score) {
                totalScore = this.state.records[this.state.email].score;
            }
        }

        this.state.records = Object.assign(
            this.state.records, 
            { 
                [this.state.email]: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    score: totalScore,
                }
            }
        );
        localStorage.setItem('myStore', JSON.stringify(this.state.records));    

    }

    getRecords() {
        const store = localStorage.getItem('myStore');
        if (store) {
            return JSON.parse(store);
        }
        return {};
    }


    updateState(newState){
        if (newState) {
            this.state = Object.assign(this.state, newState);

            this.saveRecords();

            this.updateStateEvent = new CustomEvent('updateState', { detail: this.state });
            document.dispatchEvent(this.updateStateEvent);
        } else {
            this.updateStateEvent = new CustomEvent('updateState', { detail: this.state });
            document.dispatchEvent(this.updateStateEvent);
        }
    }
}
