// Create a function that checks an array for prime numbers then inserts any primes into a new array.              


function findPrimes(arr) {
    const primes = [];
    
    for (let num of arr) {
      let isPrime = true;
      
      if (num === 1) {
        isPrime = false;
      }
      
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      
      if (isPrime) {
        primes.push(num);
      }
    }
    
    return primes;
    console.log(primes)
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const primes = findPrimes(numbers);
  console.log(primes)