import Login from './Login';
import Game from './Game';

export default class State {
    constructor() {
        this.state = {
            firstName : '',
            lastName : '',
            email : ''
        }
    }

    initApp() {
        this.login = new Login((newState) => {
            this.updateState(newState);
            this.goToScreen('login', 'canvas');
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