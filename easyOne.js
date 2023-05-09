// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

const even = []
const odd = []

function evenOrOdd(arr){
 arr.forEach(function(num){
    num % 2 === 0 ? even.push(num) : odd.push(num)
})
console.log(even)
console.log(odd)
}
evenOrOdd([0,1,2,3,4,5,6,7])