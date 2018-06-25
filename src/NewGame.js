import './styles/newGame.css';
import './styles/loader.css';

import './img/background.png';
import './img/spriteKnight.png';
import './img/spriteTrollStatic.png';
import './img/spriteTrollAttack.png';
import './img/spriteTrollHurt.png';
import './img/spriteTrollDie.png';
import './img/spriteEffects.png';

import './sounds/hero/heroAttack.wav';
import './sounds/hero/heroDead.wav';

export default class NewGame {
    constructor (forward) {
        this.forward = forward;
        this.loader = document.getElementById('loader');
        this.wrapper = document.getElementById('wrapper-logo');
        this.images = {};
        this.sounds = {};

        this.stateSubscrioption = document.addEventListener('updateState', (e) => {
            if (e.detail.preload) {
                this.loadAssets();
            } 
        });
    };

    loadAssets() {
        this.loader.style.display = 'block';
        const idsImg = ['bgdImg', 'spriteKnightImg', 'spriteTrollStaticImg', 'spriteTrollAttackImg', 'spriteTrollHurtImg', 'spriteTrollDieImg', 'spriteEffectsImg'];
        const idsSounds = ['heroAttack', 'heroDead'];
        const promises = [
            fetch('/assets/background.png'),
            fetch('/assets/spriteKnight.png'),
            fetch('/assets/spriteTrollStatic.png'),
            fetch('/assets/spriteTrollAttack.png'),
            fetch('/assets/spriteTrollHurt.png'),
            fetch('/assets/spriteTrollDie.png'),
            fetch('/assets/spriteEffects.png'),
        ];
        const promiseSounds = [
            fetch('/assets/heroAttack.wav'),
            fetch('/assets/heroAttack.wav'),
        ];

        Promise.all(promises)
            .then(values => {
                    const arr = values.map(value => {
                        return value.blob();
                    });
                    return Promise.all(arr);
                }
            )
            .then(blobImages => {
                blobImages.forEach((blob, index) => {
                    this.images[idsImg[index]] = URL.createObjectURL(blob);
                })
            })
            .then(() => {
                debugger;
                return Promise.all(promiseSounds);
            })
            .then(values => {
                values.forEach((value, index) => {
                    this.sounds[idsSounds[index]] = value.body;
                })
            })
            .then(values => {
                const arr = values.map(value => {
                    return value.blob();
                });
                return Promise.all(arr);
            })
            .then(blobSounds => {
                blobSounds.forEach((blob, index) => {
                    this.sounds[idsSounds[index]] = URL.createObjectURL(blob);
                })
            })
            .then(() => {
                this.loader.style.display = 'none';
                this.wrapper.style.display = 'none'; 
                this.forward({ images: this.images, sounds: this.sounds, preload: false });
            });  
    }
}