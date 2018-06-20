export default class EnemyName {
    constructor(){
        this.names = ['Crag', 'Straker', 'Sandro', 'Dace', 'Gunnar', 'Jabarkas', 'Galthran', 'Vokial', 'Xyron', 'Calh', 'Solmyr'];
        this.characters = ['abominable', 'awful', 'creepy', 'distasteful', 'gruesome', 'hateful', 'horrific', 'loathsome', 'nasty', 'objectionable'];
        this.nouns = ['goblin', 'orc', 'troll', 'monster', 'bastard', 'mercenary', 'freak', 'flayer', 'butcher','cannibal'];
        this.fullName = this.generatePart(this.names) + ' ' + this.generatePart(this.characters) + ' ' + this.generatePart(this.nouns);
    }

    generatePart(arr) {
        let rand = Math.random() * (arr.length);
        rand = Math.floor(rand);
        return arr[rand];
    }
}
