/*6. Call the calculator function 4 times, each time using one of the operations
 (add, subtract, multiply, divide) as the callback function.*/



 //answer:
 function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function calculator(callback, num1, num2) {
    return callback(num1, num2);
}

console.log(calculator(add, 4, 6));     
console.log(calculator(subtract, 8, 3)); 
console.log(calculator(multiply, 4, 6)); 
console.log(calculator(divide, 8, 2));   
