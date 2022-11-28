import * as localStorage from "./localStorage";
import displayAllProjects from "./controller";
import * as domElement from './domElements'

class Project {
  constructor(name) {
    this.id = _getID();
    this.name = name;
  }
}

function addProject(id, name) {
  const newProject = new Project(id, name);
    localStorage.projects.push(newProject);
    localStorage.updateProjectsStorage(); 
}

function _getID() {
  return Math.random().toString(36).substring(2, 9);
}

export default addProject;
