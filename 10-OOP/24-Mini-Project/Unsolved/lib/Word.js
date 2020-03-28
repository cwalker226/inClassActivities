const Letter = require("./Letter");

class Word {
    constructor(word){
        const wordArray = word.split("");
        this.letters = [];
        wordArray.forEach(letter => {
            this.letters.push(new Letter(letter));
        })
    }

    buildWord(){
        let word;
        this.letters.forEach(letter => {
            word += letter.toString();
        });
        return word;
    }

    guessLetter(char){
        this.letters.forEach(letter => {
            return letter.guess(char);
        })
    }

    guessedCorrectly(){
        return ;
    }
}

module.exports = Word;