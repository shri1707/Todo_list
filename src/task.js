import editSvg from "../SVGs/file-edit-outline.svg"
import deleteSvg from "../SVGs/trash-can-outline.svg"

let currentTaskItem = null; // Global variable to store the current task being edited

function createTask(title, description, date, priority) {

    // const arr = [title, description, date, priority]
    // let isTaskValid = true
    // arr.forEach(e => {
    //     if (e === "") {
    //         isTaskValid = false;
    //     }
    // });
    // if (!isTaskValid) {
    //     alert("Please fill in all fields");
    //     return;
    // }

    const taskList = document.querySelector(".taskList");
    const taskDialogBox = document.querySelector(".taskDialog");

    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
    taskItem.innerHTML =
        `<input type="checkbox" class="taskCheckbox" required>
        <h3 class="taskTitle"><strong>Title</strong> : ${title}</h3>
        <p class="taskDes"> <strong>Description: </strong>${description}</p>
        <p class="taskDue"><strong>Due Date: </strong>${date}</p>
        <p class="taskPriority"><strong>Priority: </strong> ${priority}</p>`;

    const deleteTask = document.createElement("button");
    // deleteTask.innerText = "Delete Task";
    deleteTask.classList.add("deleteTask");
    deleteTask.addEventListener("click", () => {
        taskItem.remove();
    });
    // taskItem.appendChild(deleteTask);

    const delImg = document.createElement("img")
    delImg.src = deleteSvg
    delImg.classList.add("delImg")
    
    const editTask = document.createElement("button");
    // editTask.innerText = "Edit Task";
    editTask.classList.add("editTask");
    
    const editImg = document.createElement("img")
    editImg.src = editSvg
    editImg.classList.add("editImg")
    editTask.appendChild(editImg)
    deleteTask.appendChild(delImg)

    editTask.addEventListener("click", () => {
        // Populate task form fields with existing task details
        document.querySelector("#name").value = title;
        document.querySelector("#description").value = description;
        document.querySelector("#due").value = date;
        document.querySelector("#priority").value = priority;

        // Store the current task item being edited
        currentTaskItem = taskItem;

        // Open task dialog for editing
        taskDialogBox.showModal();
    });
    taskItem.appendChild(editTask);
    taskItem.appendChild(deleteTask);

    taskList.appendChild(taskItem);

    const checkbox = taskItem.querySelector(".taskCheckbox");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskItem.classList.add("checked");
        } else {
            taskItem.classList.remove("checked");
        }
    });
}

function formValue() {
    const title = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#due").value;
    const priority = document.querySelector("#priority").value;


    const arr = [title, description, date, priority]
    let isTaskValid = true
    arr.forEach(e => {
        if (e === "") {
            isTaskValid = false;
        }
    });
    if (!isTaskValid) {
        alert("Please fill in all fields");
        return;
    }

    if (currentTaskItem) {
        // Update the existing task item
        currentTaskItem.querySelector(".taskTitle").innerText = `Title : ${title}`;
        currentTaskItem.querySelector(".taskDes").innerText = `Description : ${description}`;
        currentTaskItem.querySelector(".taskDue").innerText = `Due Date : ${date}`;
        currentTaskItem.querySelector(".taskPriority").innerText = `Priority: ${priority}`;

        // Reset the currentTaskItem after editing
        currentTaskItem = null;
    } else {
        // Create a new task item
        createTask(title, description, date, priority);
    }

    // Close the dialog box
    document.querySelector(".taskDialog").close();
}

function taskDialog() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = "";
    });

    const taskDialogBox = document.querySelector(".taskDialog");
    taskDialogBox.showModal();
    taskDialogBox.addEventListener("click", (event) => {
        if (event.target === taskDialogBox) {
            taskDialogBox.close();
        }
    });

    document.querySelector(".closebtn").addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(".taskDialog").close();
    });
}

export { formValue, createTask, taskDialog };
