/* 4. Create a function called 'divide' that takes two parameters and 
returns the quotient of the two parameters.*/




//answer:

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}


console.log(divide(10, 2)); 
console.log(divide(8, 0)); 

