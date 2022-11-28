

export const projects = JSON.parse(localStorage.getItem('projects')) || []
export const tasks = JSON.parse(localStorage.getItem('tasks')) || []

export const updateProjectsStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projects))
}

export const updateTasksStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

