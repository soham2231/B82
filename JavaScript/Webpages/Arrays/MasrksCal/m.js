marklist = [];

function addMark(){
    let mark = document.getElementById("markInput").value;
      if(mark === ""){
        alert("Enter a mark")
        return
    }
    marklist.push(mark);
    document.getElementById("markInput").value = "";
    console.log(marklist);

}

function calculate(){
    if(marklist.length === 0){
        alert("Add marks to calculate")
        return
    }
    let sum = 0;    
    for(let i=0; i<marklist.length; i++){
        sum = sum + parseInt(marklist[i]);
    }
    console.log("sum=",sum);
    document.getElementById("result").value = "Total :  "+sum;

    console.log("Average=",sum/marklist.length);
    document.getElementById("result").value += "\nAverage :  "+(sum/marklist.length);

    let highest = Math.max(...marklist.map(Number));
    console.log("Highest Mark=", highest);
    document.getElementById("result").value += "\nHighest Mark :  "+highest;

    let lowest = Math.min(...marklist.map(Number));
    console.log("Lowest Mark=", lowest);
    document.getElementById("result").value += "\nLowest Mark :  "+lowest;
}

function reset(){
    marklist = [];
    console.log(marklist);
    document.getElementById("result").value = "Results will appear here...";
}   
