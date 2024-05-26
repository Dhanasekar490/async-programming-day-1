/*  5.Create a function called 'calculator' that takes three parameters:
 a callback function, and two numbers. The calculator function should return 
 the result of the callback function with the two numbers as parameters.*/




 //answer:

 function calculator(callback, num1, num2) {
    return callback(num1, num2);
}


function add(a, b) {
    return a + b;
}

console.log(calculator(add, 4, 6)); 
