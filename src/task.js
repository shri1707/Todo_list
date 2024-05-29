function createTask() {
    const title = document.querySelector("#name").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#due").value;
    const priority = document.querySelector("#priority").value;
    const taskList = document.querySelector(".taskList");
    const taskDialogBox = document.querySelector(".taskDialog");

    const arr = [title, description, date, priority];
    let isValid = true;

    arr.forEach(e => {
        if (e === "") {
            isValid = false;
            return;
        }
    });

    if (!isValid) {
        alert("Please fill in all fields");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
    taskItem.innerHTML =
        `<h3 class="taskTitle">Title : ${title}</h3>
        <input type="checkbox" class="taskCheckbox" required>
        <p class="taskDes"> Description : ${description}</p>
        <p class="taskDue">Due Date : ${date}</p>
        <p class="taskPriority">Priority: ${priority}</p>`;
    const deleteTask = document.createElement("button")
    deleteTask.classList.add("deleteTask")
    deleteTask.addEventListener("click", () => {
        taskItem.remove()
    })
    taskItem.appendChild(deleteTask)

    taskList.appendChild(taskItem);

    taskDialogBox.close();

    const checkbox = taskItem.querySelector(".taskCheckbox");
    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            taskItem.classList.add("checked");
        } else {
            taskItem.classList.remove("checked");
        }
    });

}

function taskDialog() {

    const inputs = document.querySelectorAll("input")
    inputs.forEach(input => {
        input.value = ""
    });

    const taskDialogBox = document.querySelector(".taskDialog")
    taskDialogBox.showModal()
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

export { createTask, taskDialog };
