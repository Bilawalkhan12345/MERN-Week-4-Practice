// ==========================
// Selecting HTML elements
// ==========================

// Get input field
const input = document.getElementById("taskInput");

// Get add button
const addBtn = document.getElementById("addBtn");

// get UL where tasks will appear
const taskList = document.getElementById("taskList");


// ==========================
// Load saved tasks
// ==========================

// if tasks exist in localStorage
// convert them back to an array
// otherwise, create an empty array

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
console.log(tasks);

// Display existing tasks
renderTasks();

// ==========================
// Button click event
// ==========================


// when add button is clicked
// call addTask() function

addBtn.addEventListener("click", addTask);

// ==========================
// Add new task
// ==========================

function addTask() {

    // Read what user typed in input field
    const taskText = input.value.trim();
    // here trim removes any leading or trailing whitespace from the input value

    // Prevent adding empty tasks
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a task object
    const task = {
        // Task name
        text: taskText,

        // Initially task is not completed
        completed: false,
    };

    // Add object to tasks array
    tasks.push(task);

    // Clear input field
    input.value = "";

    // Save tasks to localStorage
    saveTasks();

    // Display updated tasks
    renderTasks();
}


// ==========================
// Dsiplay All Tasks
// ==========================

function renderTasks() {
    // Remove previous tasks from the list
    taskList.innerHTML = "";

    // Loop through tasks array and create list items
    tasks.forEach((task, index) => {

        // Create a new list item
        const li = document.createElement("li");

        // Create span for task text
        const taskText = document.createElement("span");

        // Show task name in span
        taskText.textContent = task.text;

        // If completed
        // add 'completed' class to li
        if (task.completed) {
            li.classList.add("completed");
        }

        // Create div for buttons
        const buttonsDiv = document.createElement("div");

        // ==========================
        // Done Button
        // ==========================

        const doneBtn = document.createElement("button");

        doneBtn.textContent = "Done";

        // When done button is clicked
        doneBtn.addEventListener("click" , function() {

        // Toggle completed value
        task.completed = !task.completed;

        // Save changes
        saveTasks();

        // Refresh screen
        renderTasks();
    });


// ==========================
// Delete Button
// ==========================

const deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.addEventListener("click" , function(){
    // Remove one item
    tasks.splice(index, 1);

    // save updated array
    saveTasks();

    // Refresh screen 
    renderTasks();
});

// Add buttons into div

buttonsDiv.appendChild(doneBtn);
buttonsDiv.appendChild(deleteBtn);


// Add text into Li
li.appendChild(taskText);

// Add buttons into Li
li.appendChild(buttonsDiv);

// Finally add Li into Ul
taskList.appendChild(li);
    });
}


// =========================
// Save Tasks
// =========================

function saveTasks(){

    // Convert array into JSON string
    const data = JSON.stringify(tasks);

    // Save inside browser
    localStorage.setItem("tasks" , data);
}