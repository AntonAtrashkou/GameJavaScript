import './styles/newGame.css';
import './styles/loader.css';

import './img/background.png';
import './img/hero/spriteKnight.png';
import './img/hero/spriteEffects.png';
import './img/enemy/spriteTrollStatic.png';
import './img/enemy/spriteTrollAttack.png';
import './img/enemy/spriteTrollHurt.png';
import './img/enemy/spriteTrollDie.png';

import './sounds/hero/heroAttack.wav';
import './sounds/hero/heroDead.wav';
import './sounds/hero/heroHurt.wav';
import './sounds/hero/forTheAlliance.wav';
import './sounds/hero/asYouWish.wav';

import './sounds/enemy/enemyAttack.wav';
import './sounds/enemy/enemyDead.wav';
import './sounds/enemy/enemyHurt.wav';
import './sounds/enemy/lokTar.wav';
import './sounds/enemy/cuseMe.wav';
import './sounds/enemy/enemyOK.wav';

import './sounds/game/mainSound.wav';



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
        const idsSounds = ['heroAttack', 'heroDead', 'heroHurt', 'enemyAttack', 'enemyDead', 'enemyHurt', 'mainSound',  'asYouWish', 'forTheAlliance', 'lokTar', 'cuseMe', 'enemyOK'];
        const promises = [
            fetch('/GameJavaScript/assets/background.png'),
            fetch('/GameJavaScript/assets/spriteKnight.png'),
            fetch('/GameJavaScript/assets/spriteTrollStatic.png'),
            fetch('/GameJavaScript/assets/spriteTrollAttack.png'),
            fetch('/GameJavaScript/assets/spriteTrollHurt.png'),
            fetch('/GameJavaScript/assets/spriteTrollDie.png'),
            fetch('/GameJavaScript/assets/spriteEffects.png'),
        ];
        const promiseSounds = [
            fetch('/GameJavaScript/assets/heroAttack.wav'),
            fetch('/GameJavaScript/assets/heroDead.wav'),
            fetch('/GameJavaScript/assets/heroHurt.wav'),
            fetch('/GameJavaScript/assets/enemyAttack.wav'),
            fetch('/GameJavaScript/assets/enemyDead.wav'),
            fetch('/GameJavaScript/assets/enemyHurt.wav'),
            fetch('/GameJavaScript/assets/mainSound.wav'),
            fetch('/GameJavaScript/assets/asYouWish.wav'),
            fetch('/GameJavaScript/assets/forTheAlliance.wav'),
            fetch('/GameJavaScript/assets/lokTar.wav'),
            fetch('/GameJavaScript/assets/cuseMe.wav'),
            fetch('/GameJavaScript/assets/enemyOK.wav'),
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
                return Promise.all(promiseSounds);
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