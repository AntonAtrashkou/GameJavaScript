import Login from './Login';
import Game from './Game';
import NewGame from './NewGame';


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
            // this.saveGame();
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
}

