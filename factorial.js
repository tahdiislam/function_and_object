// factorial

// 1+2+3+4+5+6+7+8

function factorial(number){
    let result = 1;
    for (let i = 1; i <= number; i++){
        result *= i;
    }
    return result;
}

// console.log(factorial(30))

// task : revarse factorial

function revarseFactorial(number){
    let result = 1;
    for(let i = number; i > 0; i--){
        result *= i;
    }
    return result;
}

// console.log(revarseFactorial(10));