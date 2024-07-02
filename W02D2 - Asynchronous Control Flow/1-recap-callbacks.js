
const doSomeMath = (num1, num2, callback) => {
    console.log("Num1", num1);
    console.log("Num2", num2);
    return callback(num1, num2);
}

const addTwoNumbers = (num1, num2) => {
    return num1 + num2;
}

const multiplyTwoNumbers = (num1, num2) => {
    return num1 * num2;
}

const result = doSomeMath(10, 20, addTwoNumbers);
console.log(result);

const result2 = doSomeMath(10, 20, multiplyTwoNumbers);
console.log(result2);

const result3 = doSomeMath(10, 20, (num1, num2) => {
    return num1 - num2;
});
console.log(result3);