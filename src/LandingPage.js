import './styles/landingPage.css';

export default class LandingPage {
    constructor (forward) {

        this.leftBut = document.getElementById('left-slide').addEventListener('click', () => this.plusDivs(-1));
        this.rightBut = document.getElementById('right-slide').addEventListener('click', () => this.plusDivs(1));
        this.slideIndex = 1;
        this.startGameBut   = document.getElementById('sartGameBut').addEventListener('click', () => {
            document.getElementById('header').style.display = 'none';
            document.getElementById('about').style.display = 'none';
            document.getElementById('screenshots').style.display = 'none';
            document.getElementById('sartGame').style.display = 'none';
            document.getElementById('footer').style.display = 'none';
            document.getElementById('game-section').style.display = 'flex';
        });

        this.showDivs(this.slideIndex);
    }

    plusDivs(number) {
        this.showDivs(this.slideIndex += number);
    }

    showDivs(number) {
        let slide = document.getElementsByClassName("slide");
        if (number > slide.length) {this.slideIndex = 1}    
        if (number < 1) {this.slideIndex = slide.length}
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.display = "none";  
        }
        slide[this.slideIndex-1].style.display = "block";  
    }
}