function countVowels(phrase){
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    var phraseSplit = phrase.split("");

    for(var i = 0; i < phraseSplit.length; i++){
        for(var j = 0; j < vowels.length; j++){
            if(vowels[j] === phraseSplit[i]){
                count++;
            }
        }
    }
    return count;
}