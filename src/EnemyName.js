export default class EnemyName {
    constructor(){
        this.names = ['Crag', 'Straker', 'Sandro', 'Dace', 'Gunnar', 'Jabarkas', 'Galthran', 'Vokial', 'Xyron', 'Calh', 'Solmyr'];
        this.characters = ['vile', 'awful', 'creepy', 'rotten', 'gruesome', 'hateful', 'horrific', 'cloying', 'nasty', 'icky'];
        this.nouns = ['goblin', 'orc', 'troll', 'monster', 'bastard', 'warrior', 'freak', 'flayer', 'butcher','cannibal'];
        this.fullName = this.generatePart(this.names) + ' ' + this.generatePart(this.characters) + ' ' + this.generatePart(this.nouns);
    }

    generatePart(arr) {
        let rand = Math.random() * (arr.length);
        rand = Math.floor(rand);
        return arr[rand];
    }
}
