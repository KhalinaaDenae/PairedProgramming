// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean. 

// anagram : a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("night","thing")