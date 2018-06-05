import './styles/game.css';

export default class Game {
    constructor () {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = 1920;
        this.canvas.height = 1080;
        this.ctx = canvas.getContext('2d');
        
        this.hero = {};
        this.enemy = {};
        this.bg = {};
        this.heroAttack = {};
        this.enemyAttack = {};
    };

}
// function getMyBg() {
//   let canvas = document.getElementById('canvas');
//   let ctx = canvas.getContext('2d');
//   console.log(ctx)
//   let sprite = new Image();
//   sprite.src = imgBg;
//   sprite.onload = function(){
//     ctx.drawImage(sprite, 10, 10);
//   }
// }
//   getMyBg();