import * as localStorage from './localStorage'


class Task {
constructor (title, description, dueDate, priority, project) {
    this.id = getID()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
   
}

}

function addTask(id, title, description, dueDate, priority, project) {
    const newTask = new Task (id, title, description, dueDate, priority, project)

    localStorage.tasks.push((newTask))
    localStorage.updateTasksStorage()


}

function getID() {
    return ('-') + Math.random().toString(36).substring(2, 9);
  }

export default addTask