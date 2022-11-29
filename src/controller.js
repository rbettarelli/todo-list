import Project from "./projects";
import * as localStorage from "./localStorage";
import * as domElement from "./domElements";
import { format } from "date-fns";
import { indexOf } from "lodash";

const tasksLs = localStorage.tasks

function displayProjects(project) {
  domElement.projectList.appendChild(createProjectList(project.name, project.id), domElement.projectList.lastElementChild);
}

function createProjectList(name, id) {
  const li = document.createElement("li");
  li.id = "project-" + id;
  li.textContent = name;
  li.classList.add("list-of-project");
  return li;
}

function displayAllProjects() {
  clearProjectList();
  localStorage.projects.forEach((project) => {
    displayProjects(project);
    projectTask(project)
    console.log(project);
    domElement.addProjectForm.reset();
  });
}


function clearProjectList() {
  while (domElement.projectList.firstChild) {
    domElement.projectList.removeChild(domElement.projectList.firstChild);
  }
}


function projectTask(project) {
  domElement.taskProject.insertBefore(createSelectionProject(project.name, project.id), domElement.taskProject.lastElementChild);
}

function createSelectionProject(name, id) {
  const option = document.createElement("option");
  option.id = "project-" + id;
  option.textContent = name;
  option.value = name;
  return option;
}

export const showTask = () => {
  domElement.taskContainer.innerHTML = " ";
  if (localStorage.tasks.length == 0) {
    return;
  }

  localStorage.tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("data", index);
    taskDiv.classList.add("todo");
    taskDiv.id = `task${task.id}`;
    taskDiv.classList.add(`priority-${task.priority}`);

    const complete = document.createElement("input");
    complete.setAttribute("type", "checkbox");
    complete.classList.add("todo-check-box");

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("todo-task-title");
    taskTitle.textContent = task.title;

    const taskDetails = document.createElement("div");
    taskDetails.classList.add("todo-task-detail");
    taskDetails.textContent = "Details";

    const taskDueDate = document.createElement("div");
    taskDueDate.classList.add("todo-task-due-date");
    const dateObject = new Date(task.dueDate);
    const dateMonth = format(dateObject, "MMM");
    const dateDay = format(dateObject, "do");
    const dateYear = format(dateObject, "yyyy");
    const dateFormated = `${dateDay} ${dateMonth} ${dateYear} `;
    taskDueDate.textContent = dateFormated;

    const taskEdit = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    taskEdit.classList.add("task-edit-btn", "icon");
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "img/edit.svg#icon-edit");
    taskEdit.appendChild(use);

    const taskDeleteSpan = document.createElement('span')
    taskDeleteSpan.setAttribute('id', `delete${task.id}`)
    const taskDelete = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    taskDelete.classList.add("task-delete-btn", "icon");
    taskDelete.setAttribute("data", index);
  
    const use2 = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use2.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "img/delete.svg#icon-bin");
    taskDelete.appendChild(use2);
    taskDeleteSpan.appendChild(taskDelete)

    taskDiv.appendChild(complete);
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDetails);
    taskDiv.appendChild(taskDueDate);
    taskDiv.appendChild(taskEdit);
    taskDiv.appendChild(taskDeleteSpan);

    domElement.taskContainer.appendChild(taskDiv);
  });

function removeTaskFromLS() {
    console.log(taskID);
    for (let index = 0; index < localStorage.tasks.length; index++) {
      if (localStorage.tasks[index].id === taskID) {
        localStorage.tasks.splice(index, 1);
        break;

      }
    }
  }


};





export {displayAllProjects, removeTaskFromLS}





 
   
