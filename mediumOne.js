// Create a Function Called “vowelChecker” that takes in a single argument (x) and logs weather or not the input is a vowel

function vowelChecker(x){
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    if (vowels.includes(x)){
        console.log("vowel")
    } else {
        console.log('not a vowel')
    }
}

vowelChecker('a')