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
        }
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

}