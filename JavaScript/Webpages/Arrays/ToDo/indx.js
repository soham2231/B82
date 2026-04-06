tasks=[]

function addT(){
   let newToDo= document.getElementById("userTask").value;
    if(newToDo===""){
        alert("Enter a Task")
    }
    else{
        tasks.push(newToDo)
        console.log(tasks)
        document.getElementById("userTask").value=""
    }
    displayT()
}

function deleteTask(i){
    tasks.splice(i,1)
    displayT()
}


function clearT(){
    tasks=[]
    displayT()
}

function updateTask(i){
// WANT TO change the text of update btn after updating the task to "Updated"
    let updatedTask= prompt("Enter the updated task")
    if(updatedTask===""){
        alert("Enter a Task")
    }
    else{
        tasks[i]=updatedTask
        console.log(tasks)
    }
    displayT()



}   

function displayT(){
        document.getElementById("taskUl").innerHTML = tasks.map((task,i)=>`
        <li>
        ${task}
         <button id="upd" class="btn btn-success" onclick="updateTask(${i})">Update</button>
         <button  class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>
         </li>

    `).join("")
}

displayT()

