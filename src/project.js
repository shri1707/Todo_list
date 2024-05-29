import deleteSvg from "../SVGs/trash-can-outline.svg"
import editSvg from "../SVGs/file-edit-outline.svg"

let currentProjItem = null; 

function createProject(projectTitle) {
    const projectList = document.querySelector(".projectList")
    const projectDialogBox = document.querySelector(".projectDialog")

    // let isProjValid = true;


    // if (projectTitle === "") {
    //     isProjValid = false;
    //     if (!isProjValid) {
    //         alert("Please fill in all fields");
    //         return;
    //     }
    // }

    const projectItem = document.createElement("div")
    projectItem.classList.add("projectItem")
    projectItem.innerHTML = `<h3 class="projectTitle"><strong>Title</strong> : ${projectTitle}</h3>`

    const deleteProject = document.createElement("button")
    deleteProject.classList.add("deleteProject")
    const deleteProjImg = document.createElement("img")
    deleteProjImg.classList.add("deleteProjImg") 
    deleteProjImg.src= deleteSvg
    deleteProject.appendChild(deleteProjImg)

    deleteProject.addEventListener("click", () => {
        projectItem.remove()
    })

    const editProject = document.createElement("button");
    // editTask.innerText = "Edit Task";
    editProject.classList.add("editProject");

    const editProjImg = document.createElement("img")
    editProjImg.src = editSvg
    editProjImg.classList.add("editImg")
    editProject.appendChild(editProjImg)

    editProject.addEventListener("click", () => {
        // Populate task form fields with existing task details
        document.querySelector("#n").value = projectTitle;
        // document.querySelector("#description").value = description;
        // document.querySelector("#due").value = date;
        // document.querySelector("#priority").value = priority;

        // Store the current task item being edited
        currentProjItem = projectItem;

        // Open task dialog for editing
        projectDialogBox.showModal();
    });
    projectItem.appendChild(editProject)
    projectItem.appendChild(deleteProject)
    projectList.appendChild(projectItem)


    projectDialogBox.close()
}


function projectValue(){
    const projectTitle = document.querySelector("#n").value
    let isProjValid = true;


    if (projectTitle === "") {
        isProjValid = false;
        if (!isProjValid) {
            alert("Please fill in all fields");
            return;
        }
    }

    if (currentProjItem) {
        // Update the existing task item
        currentProjItem.querySelector(".projectTitle").innerText = `Title : ${projectTitle}`;
        // Reset the currentTaskItem after editing
        currentProjItem = null;
    } else {
        // Create a new task item
        createProject(projectTitle);
    }

    // Close the dialog box
    document.querySelector(".projectDialog").close();
}

function projectDialog() {


    const projInputs = document.querySelector("#n")
    projInputs.value = ""


    const projectDialogBox = document.querySelector(".projectDialog")
    projectDialogBox.showModal()
    projectDialogBox.addEventListener("click", (event) => {
        if (event.target === projectDialogBox) {
            projectDialogBox.close();
        }
    });


    document.querySelector(".projectClosebtn").addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(".projectDialog").close();
    });
}

export { projectValue,createProject, projectDialog }