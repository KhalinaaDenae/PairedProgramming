// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of matching brackets ({}, [], ()). 



function matchingBrackets(str){
// set variable to false - set to true only if index 0 and 1 of string contain matching brackets 
    let containsMatching = false

    // if statements check char at index 0 & index 1 for matching brackets
    if (str[0] === "(" && str[1] == ")"){
        console.log(' open bracket')
        containsMatching = true
    } else if (str[0] === "{" && str[1] == "}") {
         console.log(' open bracket')
        containsMatching = true
    } else if (str[0] === "[" && str[1] == "]") {
        console.log(' open bracket')
        containsMatching = true
    }
    console.log(containsMatching)
}

matchingBrackets('{}')
matchingBrackets("{ )")