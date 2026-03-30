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
    let newTask=prompt("Update your Task",tasks[i])
    tasks[i]=newTask
    displayT()
    up.innerHTML = "Updated"
       

}

function displayT(){
        document.getElementById("taskUl").innerHTML = tasks.map((task,i)=>`
        <li>
        ${task}
         <button id="up" class="btn btn-success" onclick="updateTask(${i})">Update</button>
         <button  class="btn btn-danger" onclick="deleteTask(${i})">Delete</button>
         </li>

    `).join("")
}

displayT()



// function addTask() {
//   let input = document.getElementById("taskInput");
//   let task = input.value;

//   if (task === "") {
//     alert("Enter a task");
//     return;
//   }

//   let li = document.createElement("li");
//   li.innerText = task;

//   // DELETE BUTTON
//   let delBtn = document.createElement("button");
//   delBtn.innerText = "Delete";

//   delBtn.onclick = function () {
//     li.remove();
//   };

//   // UPDATE BUTTON 🔥
//   let updateBtn = document.createElement("button");
//   updateBtn.innerText = "Update";

//   updateBtn.onclick = function () {
//     let newTask = prompt("Update your task:", li.firstChild.textContent);

//     if (newTask !== null && newTask !== "") {
//       li.firstChild.textContent = newTask + " (Updated)";
      
//       updateBtn.innerText = "Updated ✅";
//       updateBtn.style.backgroundColor = "green";
//       updateBtn.style.color = "white";
//     }
//   };

//   li.appendChild(delBtn);
//   li.appendChild(updateBtn);

//   document.getElementById("taskList").appendChild(li);

//   input.value = "";
// }

// // CLEAR ALL
// function clearAll() {
//   document.getElementById("taskList").innerHTML = "";
// }