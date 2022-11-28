import displayAllProjects from "./controller";
import * as domElement from "./domElements";
import addProject from "./projects";
import addTask from "./tasks";



const listeners = (() => {
  domElement.addProjectForm.addEventListener("submit", (e) => {
    addProject(domElement.projectName.value);
    e.preventDefault();
    controller.displayAllProjects();
    console.log("passei auqi");
  });

  domElement.addTaskForm.addEventListener("submit", (e) => {
    e.preventDefault;

    addTask(
      domElement.taskTitle.value,
      domElement.taskDescription.value,
      domElement.taskDueDate.value,
      domElement.taskPriority.value,
      domElement.taskProject.value
    );

    controller.showTask();
  });

  document.addEventListener("click", (e) => {


    if (e.target.closest(`span[id*="delete"]`)) {
      const id = e.target.closest('span').id
      controller.removeTaskFromLS(id.substr(id.indexOf('-')))
      console.log(id.substr(id.indexOf('-')))  
    }
    
  });

  

})();

export default listeners;
