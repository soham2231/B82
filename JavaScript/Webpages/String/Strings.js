//1. Count the number of vowels in a given string
let text2 = "my name is soham kadam";
let count2 = 0;
for (let i = 0; i < text2.length; i++) {
    if (text2[i] === "a" || text2[i] === "e" || text2[i] === "i" || text2[i] === "o" || text2[i] === "u") {
        count2++;
    }
}
console.log(count2);

// 2. Check if a string is a palindrome.................................................................
 str = "racecar";
 reversed = str.split("").reverse().join("");
console.log(str === reversed);


//3.Extract the first word of sentence............................................................................
let sentence = "My name is soham kadam, I am a web developer";
let firstWord = sentence.split(" ")[0];
console.log(firstWord);



// 4.Replace all spaces in a string with -...............................................................
const org = "this is a test";
const result = org.replaceAll(' ', '-');

console.log(result);


//5.Split a string into an array of words............................................................................
let sentence1 = "My name is soham kadam, I am a web developer";
let words1 = sentence1.split(" ");
console.log(words1);


//6. Convert the first letter of each word in a string to uppercase.........................................
let text = "my name is soham kadam";
let words = text.split(" ");
for (let i = 0; i < words.length; i++) {
    // uppercase the first character + add the rest of the word
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
//  Join the array 
let result1 = words.join(" ");

console.log(result1); 




//8. Count the number of occurences a specific character appears in a string..................................
let text1 = "my name is soham kadam";
let char = "a";
let count = 0;
for (let i = 0; i < text1.length; i++) {
    if (text1[i] === char) {
        count++;
    }
}
console.log(count);


