function countVow(){
    const inputText = document.getElementById('inputText').value;
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < inputText.length; i++) {
        if (vowels.includes(inputText[i])) {
            count++;
        }
    }
    console.log('Vowel count:', count);
    document.getElementById('res').textContent = 'Vowel count: ' + count;
}

function countSpc(){
    const inputText = document.getElementById('inputText').value;
    let count = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === ' ') {
            count++;
        }
    }
    console.log('Space count:', count);
    document.getElementById('res').textContent = 'Space count: ' + count;
}

function countWords(){
    const inputText = document.getElementById('inputText').value.trim();  // added trim to avoid extra space count but cant remove unwanted space in between words. ???
    let count = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === ' ') {
            count++;
        }
    }
    
    console.log('Word count:', count+=1);
    document.getElementById('res').textContent = 'Word count: ' + count;
}

function countNewLine(){
    const inputText = document.getElementById('inputText').value.trim(); // added trim to avoid extra new line of start and end . cant remove in between new line
    let count = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === '\n') {
            count++;
        }
    }
    console.log('New Line count:', count+=1);
    document.getElementById('res').textContent = 'New Line count: ' + count;
}

function longestWord(){
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    console.log('Longest word:', longest);
    document.getElementById('res').textContent = 'Longest word: ' + longest;
}

function countChar(){
    const inputText = document.getElementById('inputText').value
    let count = 0
    for (let i = 0; i < inputText.length; i++) {
        count++
        if(inputText[i] === ' '){
            // continue
            count--
        }
    }
    console.log('Character count:', count);
    document.getElementById('res').textContent = 'Character count: ' + count;
}

function countCons(){
    const inputText = document.getElementById('inputText').value;
    let count = 0;
    // const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // for (let i = 0; i < inputText.length; i++) {
    //     if (consonants.includes(inputText[i])) {
    //         count++;
    //     }
    // }
    const consonants='bcdfghjklmnpqrstvwxyz';
    for(i=0;i<inputText.length;i++){
        if(consonants.includes(inputText[i])){
            count++;
        }
    }
    console.log('Consonant count:', count);
    document.getElementById('res').textContent = 'Consonant count: ' + count;
}

function countSentences(){
    const inputText = document.getElementById('inputText').value;
    let count = 0;
    for (let i = 0; i < inputText.length; i++) {
        if (inputText[i] === '.' || inputText[i] === '!' || inputText[i] === '?') {
            count++;
        }
    }
    console.log('Sentence count:', count);
    document.getElementById('res').textContent = 'Sentence count: ' + count;
}

function toLowercase(){
    const inputText = document.getElementById('inputText').value;
    const lowercaseText = inputText.toLowerCase();
    console.log('Lowercase text:', lowercaseText);                                  
    document.getElementById('res').textContent = 'Lowercase text: ' + lowercaseText;
}

function toUppercase(){
    const inputText = document.getElementById('inputText').value;
    const uppercaseText = inputText.toUpperCase();
    console.log('Uppercase text:', uppercaseText);
    document.getElementById('res').textContent = 'Uppercase text: ' + uppercaseText;
}

function titleCase(){
    
}