import * as controller from "./controller";
import * as domElement from "./domElements";
import addProject from "./projects";
import addTask from "./tasks";



const listeners = (() => {
  domElement.addProjectForm.addEventListener("submit", (e) => {
    console.log('salvo')
    addProject(domElement.projectName.value);
    controller.displayAllProjects()
    domElement.projectName.value=''
    e.preventDefault();
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


    console.log(e.target.id)

    if (e.target.closest(`span[id*="delete"]`)) {
      const id = e.target.closest('span').id
      controller.removeTaskFromLS(id.substr(id.indexOf('-')))
      console.log(id.substr(id.indexOf('-')))  
      controller.removeTaskFromLS()
    }
    
  });

  

})();

export default listeners;
