import './styles/game.css';
import imgBg from './img/1.png'

function getMyBg() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  console.log(ctx)
  let sprite = new Image();
  sprite.src = imgBg;
  sprite.onload = function(){
    ctx.drawImage(sprite, 10, 10);
  }
}
  getMyBg();