import React from "react";

function Math(props) {
    let result;
    switch (props.operator) {
        case "+":
            result = Number(props.num1) + Number(props.num2);
            break;
        case "-":
            result = Number(props.num1) - Number(props.num2);
            break;
        case "*":
            result = Number(props.num1) * Number(props.num2);
            break;
        case "/":
            result = Number(props.num1) / Number(props.num2);
            break;
        default:
            result = 0;
            break;
    }
    
    return (<span>{result}</span>);
}

export default Math;