// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;
const result = doubleIt(50);
console.log(result);

const addNumber = (num1 , num2) => num1 + num2;
const ans = addNumber(12, 2);
console.log(ans);

const give5 = () => 5;
const result2 = give5();
console.log(result2);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(7, 5);
console.log(result4);