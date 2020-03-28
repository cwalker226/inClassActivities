class Letter {
    constructor(char){
        this.char = char;
        var letters = /^[A-Za-z0-9]+$/;
        this.visible = !this.char.match(letters);
    }

    toString(){
        return this.visible === true ? this.char : "_";
    }

    guess(char){
        if(char === this.char){
            this.visible = true;
            return true;
        }
        return false;
    }

    getSolution(){
        return this.char;
    }
}

module.exports = Letter;