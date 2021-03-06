// import './styles/newGame.css';
// import './styles/loader.css';
import './index.css';

import '../../../Assets/img/background.png';
import '../../../Assets/img/hero/spriteKnight.png';
import '../../../Assets/img/hero/spriteEffects.png';
import '../../../Assets/img/enemy/spriteTrollStatic.png';
import '../../../Assets/img/enemy/spriteTrollAttack.png';
import '../../../Assets/img/enemy/spriteTrollHurt.png';
import '../../../Assets/img/enemy/spriteTrollDie.png';

import '../../../Assets/sounds/hero/heroAttack.wav';
import '../../../Assets/sounds/hero/heroDead.wav';
import '../../../Assets/sounds/hero/heroHurt.wav';
import '../../../Assets/sounds/hero/forTheAlliance.wav';
import '../../../Assets/sounds/hero/asYouWish.wav';

import '../../../Assets/sounds/enemy/enemyAttack.wav';
import '../../../Assets/sounds/enemy/enemyDead.wav';
import '../../../Assets/sounds/enemy/enemyHurt.wav';
import '../../../Assets/sounds/enemy/lokTar.wav';
import '../../../Assets/sounds/enemy/cuseMe.wav';
import '../../../Assets/sounds/enemy/enemyOK.wav';

import '../../../Assets/sounds/game/mainSound.wav';



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
            fetch('/assets/heroDead.wav'),
            fetch('/assets/heroHurt.wav'),
            fetch('/assets/enemyAttack.wav'),
            fetch('/assets/enemyDead.wav'),
            fetch('/assets/enemyHurt.wav'),
            fetch('/assets/mainSound.wav'),
            fetch('/assets/asYouWish.wav'),
            fetch('/assets/forTheAlliance.wav'),
            fetch('/assets/lokTar.wav'),
            fetch('/assets/cuseMe.wav'),
            fetch('/assets/enemyOK.wav'),
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