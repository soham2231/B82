//1. Count the number of vowels in a given string
let text2 = "my name is soham kadam";
let count2 = 0;
for (let i = 0; i < text2.length; i++) {
  if (
    text2[i] === "a" ||
    text2[i] === "e" ||
    text2[i] === "i" ||
    text2[i] === "o" ||
    text2[i] === "u"
  ) {
    count2++;
  }
}
console.log("Count of vowels:", count2);

// 2. Check if a string is a palindrome.................................................................
let str = "racecar";
let reversed = str.split("").reverse().join("");
console.log("Is palindrome:", str === reversed);

//3.Extract the first word of sentence............................................................................
let sentence = "My name is soham kadam, I am a web developer";
let firstWord = sentence.split(" ")[0];
console.log("First word:", firstWord);

// 4.Replace all spaces in a string with -...............................................................
const org = "this is a test";
const result = org.replaceAll(" ", "-");

console.log("Spaces to hyphens:", result);

//5.Split a string into an array of words............................................................................
let sentence1 = "My name is soham kadam, I am a web developer";
let words1 = sentence1.split(" ");
console.log("String to array:", words1);

//6. Convert the first letter of each word in a string to uppercase.........................................
let text = "my name is soham kadam";
let words = text.split(" ");
for (let i = 0; i < words.length; i++) {
  // uppercase the first character + add the rest of the word
  words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}
//  Join the array
let result1 = words.join(" ");

console.log("First letter to uppercase:", result1);

//7. Reverse the characters in a string manually (Without using built-in functions)............................................................................
let str1 = "Hello World";
let reversed1 = "";
for (let i = str1.length - 1; i >= 0; i--) {
  reversed1 += str1[i];
}
console.log("Reversed string:", reversed1);

//8. Count the number of occurences a specific character appears in a string..................................
let text1 = "my name is soham kadam";
let char = "a";
let count = 0;
for (let i = 0; i < text1.length; i++) {
  if (text1[i] === char) {
    count++;
  }
}
console.log("Character count:", count);

// 9. Remove all alpha-numeric characters from a string,in simple way without using inbuilt functions............................................................................
let str2 = "Hello123 World!@#";
let result2 = "";
for (let i = 0; i < str2.length; i++) {
  if (
    (str2[i] >= "a" && str2[i] <= "z") ||
    (str2[i] >= "A" && str2[i] <= "Z")
  ) {
    result2 += str2[i];
  }
}
console.log("String without alphanumeric characters:", result2);

// 10. Check if a string starts and ends with the same character............................................................................
let str3 = "Levelad adfa dfa dd fa df adf ";
let startsAndEndsSame =
  str3[0].toLowerCase() === str3[str3.length - 1].toLowerCase();
console.log("Starts and ends with same character:", startsAndEndsSame);
