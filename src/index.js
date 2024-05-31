import "./style.css";
import { renderTasks, formValue, createTask, taskDialog } from "./task";
import { projectValue, createProject, projectDialog } from "./project";

document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.querySelector(".add-task");
    const addProjectButton = document.querySelector(".add-project")


    addTaskButton.addEventListener("click", () => {

        taskDialog()
        document.getElementById('name').focus()
    });

    addProjectButton.addEventListener("click", () => {
        projectDialog()
        document.getElementById('n').focus()
    })


    document.querySelector(".submitbtn").addEventListener("click", (event) => {
        event.preventDefault();
        formValue();
        // After creating a task, render tasks again
        renderTasks();
    });

    document.querySelector(".projectSubmitbtn").addEventListener("click", (event) => {
        event.preventDefault();
        projectValue();
    });

    // document.querySelector(".closebtn").addEventListener("click", (event) => {
    //     event.preventDefault();
    //     document.querySelector(".taskDialog").close();
    // });
    renderTasks();

});
