function createProject() {
    const projectTitle = document.querySelector("#n").value
    const projectList = document.querySelector(".projectList")
    const projectDialogBox= document.querySelector(".projectDialog")

    let isProjValid = true;


    if (projectTitle === "") {
        isProjValid = false;
        if (!isProjValid) {
            alert("Please fill in all fields");
            return;
        }
    }

    const projectItem = document.createElement("div")
    projectItem.classList.add("projectItem")
    projectItem.innerHTML= `<div class="projectTitle">Title : ${projectTitle}`

    const deleteProject= document.createElement("button")
    deleteProject.classList.add("deleteProject")
    deleteProject.addEventListener("click", ()=>{
        projectItem.remove()
    })
    projectItem.appendChild(deleteProject)
    projectList.appendChild(projectItem)


    projectDialogBox.close()
}



function projectDialog() {

    
    const projInputs= document.querySelector("#n")
    projInputs.value=""


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

export {createProject, projectDialog }