import './styles/newGame.css';
import './styles/loader.css';

import './img/background.png';
import './img/spriteKnight.png';
import './img/spriteTrollStatic.png';
import './img/spriteTrollAttack.png';
import './img/spriteTrollHurt.png';
import './img/spriteTrollDie.png';
import './img/spriteEffects.png';

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
        const idsImg = ['bgdImg', 'spriteKnightImg', 'spriteTrollStaticImg', 'spriteTrollAttackImg', 'spriteTrollHurtImg', 'spriteTrollDieImg', 'spriteEffectsImg'];
        const promises = [
            fetch('/assets/background.png'),
            fetch('/assets/spriteKnight.png'),
            fetch('/assets/spriteTrollStatic.png'),
            fetch('/assets/spriteTrollAttack.png'),
            fetch('/assets/spriteTrollHurt.png'),
            fetch('/assets/spriteTrollDie.png'),
            fetch('/assets/spriteEffects.png'),
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
                }, 1000);
            })
            
    }


}