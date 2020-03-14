var maths = require("./maths");

var operation = process.argv[2];
var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

switch (operation){
    case "sum":
        console.log(maths.sum(numOne,numTwo));
        break;
    case "difference":
        console.log(maths.diff(numOne,numOne));
        break;
    case "product":
        console.log(maths.prod(numOne,numTwo));
        break;
    case "quotient":
        console.log(maths.quot(numOne,numTwo));
        break;
    default:
        console.log("fail!")
        break;
}