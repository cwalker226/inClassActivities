function Algo() {}

Algo.prototype.reverse = function(str) {
    const splitArray = str.split("");
    const reverseArray = splitArray.reverse();
    return reverseArray.join("");
};

Algo.prototype.isPalindrome = function(str) {
    const reverseStr = this.reverse(str);
    return reverseStr === str;
};

Algo.prototype.capitalize = function(str) {
    const lowerStr = str.toLowerCase();
    return str.split(" ").map(word => {
        return word.substring(0, 1).toUpperCase() + word.substring(1);
    }).join(" ");
};

module.exports = Algo;
