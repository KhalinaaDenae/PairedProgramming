// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder. 

function findGreatestCommonDenominator(num1, num2){
    let gcd = 1 
    for (let i = 1; i <= num1 && num2; i++){
        // gcd = the greatest positive integer d such that d is a divisor of both a and b
        if (num1 % i === 0 && num2 % i === 0 ){
            gcd = i
        }
    }

    return gcd
    console.log(gcd)
}

console.log(findGreatestCommonDenominator(100,50))