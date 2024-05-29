import "./style.css";
import { createTask, taskDialog } from "./task";
import { createProject, projectDialog } from "./project";

document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.querySelector(".add-task");
    const addProjectButton= document.querySelector(".add-project")

    addTaskButton.addEventListener("click", () => {
        
        taskDialog()
    });

    addProjectButton.addEventListener("click", ()=>{
        projectDialog()
    })


    document.querySelector(".submitbtn").addEventListener("click", (event) => {
        event.preventDefault();
        createTask();
    });

    document.querySelector(".projectSubmitbtn").addEventListener("click", (event) => {
        event.preventDefault();
        createProject();
    });
    
    // document.querySelector(".closebtn").addEventListener("click", (event) => {
    //     event.preventDefault();
    //     document.querySelector(".taskDialog").close();
    // });
});
