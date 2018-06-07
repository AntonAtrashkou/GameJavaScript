import './styles/newGame.css';
import './styles/loader.css';

import './img/background.png';
import './img/spriteKnight.png';
import './img/spriteTrolls.png';

export default class NewGame {
    constructor (forward) {
        this.forward = forward;
        this.loader = document.getElementById('loader');
        this.images = {};

        this.stateSubscrioption = document.addEventListener('updateState', (e) => {
            if (e.detail.preload) {
                this.loadAssets();
            } 
        });
    };

    loadAssets() {
        this.loader.style.display = 'block';
        const idsImg = ['bgdImg', 'spriteKnightImg', 'spriteTrollsImg'];
        const promises = [
            fetch('/assets/background.png'),
            fetch('/assets/spriteKnight.png'),
            fetch('/assets/spriteTrolls.png'),
        ];  
        Promise.all(promises)
            .then(values => {
                values.forEach((value, index) => {
                    value.blob()
                        .then(blob => {
                            this.images[idsImg[index]] = URL.createObjectURL(blob);
                        });
                });
            })
            .then(() => {
                setTimeout(() => {
                    this.loader.style.display = 'none';
                    this.forward({ images: this.images, preload: false });
                }, 2000);
            })
            
    }


}