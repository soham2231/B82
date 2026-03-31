// function change(){
//   document.querySelector('#txt').innerHTML="JavaScript is Fun 🔥"
//   document.querySelector('#txt').style.backgroundColor="wheat"
//   document.querySelector('#txt').style.color="red"
// }

// document.querySelector("#btn").addEventListener("click",function(){
//   console.log("btn clicked");
// });

const fruit=["apple","banana","mango","orange","grapes","pineapple"];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit.length);

slice=fruit.slice(1,3);   // syntax: array_name.slice(startIndex, endIndex)   gives substring
// console.log(slice);

//splice 
//syntax: array_name.splice(index, deleteCount, newElement)   affects original array

fruit.splice(1,1,"kiwi"); //replace
console.log(fruit);

fruit.splice(4,0,"banana"); //insert
console.log(fruit);

fruit.splice(2,1); //delete can delete multiple elements at once eg. fruit.splice(2,2);
console.log(fruit);

fruit.splice(0,0,"chickoo"); //insert bye default at start
console.log(fruit);


fruit.splice(fruit.length,0,"Papaya"); //insert at end of array
console.log(fruit);

fruit.splice(fruit.length, 0, "Ki", "Oo")
console.log(fruit);