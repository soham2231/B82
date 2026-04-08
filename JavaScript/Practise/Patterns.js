//1. Print Square Pattern of asterisks for n rows and n columns

let n = 5; // Size of the square
for (let i = 0; i < n; i++) {
  //row
  let row = "";
  for (let j = 0; j < n; j++) {
    //column
    row += "* ";
  }
  console.log(row);
}

//2. Print Triangle Pattern
let t = 5;
for (let i = 1; i <= t; i++) {
  console.log("* ".repeat(i));
}

//3. Print Inverted Triangle Pattern without using repeat function
let it = 5;
for (let i = it; i >= 1; i--) {
  let row = ""; // Initialize an empty string to store the current row
  for (let j = 1; j <= i; j++) {
    row += "* "; // Append an asterisk followed by a space to the row string
  }
  console.log(row); // Print the current row
}

// hollow square pattern
let hs = 5; // Size of the hollow square
for (let i = 0; i < hs; i++) {
  let row = "";
  for (let j = 0; j < hs; j++) {
    if (i === 0 || i === hs - 1 || j === 0 || j === hs - 1) {
      row += "* "; // Print asterisk for the borders
    } else {
      row += "  "; // Print spaces for the inside of the square
    }
  }
  console.log(row);
}

//hollow triangle pattern
let ht = 5; // Size of the hollow triangle
for (let i = 1; i <= ht; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === ht) {
      row += "* "; // Print asterisk for the borders and the last row
    } else {
      row += "  "; // Print spaces for the inside of the triangle
    }
  }
  console.log(row);
}
