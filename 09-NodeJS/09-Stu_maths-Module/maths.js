function sum(num1, num2){
    return num1 + num2;
}

function difference(num1, num2){
    return num1 - num2;
} 

function product(num1, num2){
    return num1 * num2;
}

function quotient(num1, num2){
    return num1 / num2;
}

module.exports = {
    sum: sum,
    diff: difference,
    prod: product,
    quot: quotient
}