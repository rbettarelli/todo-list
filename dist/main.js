/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Export 'removeTaskFromLS' is not defined (130:28)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n| \\n> export {displayAllProjects, removeTaskFromLS}\\n| \\n| \");\n\n//# sourceURL=webpack://todo-list/./src/controller.js?");

/***/ }),

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProjectForm\": () => (/* binding */ addProjectForm),\n/* harmony export */   \"addTaskForm\": () => (/* binding */ addTaskForm),\n/* harmony export */   \"newProjectModal\": () => (/* binding */ newProjectModal),\n/* harmony export */   \"newTaskModal\": () => (/* binding */ newTaskModal),\n/* harmony export */   \"projectList\": () => (/* binding */ projectList),\n/* harmony export */   \"projectName\": () => (/* binding */ projectName),\n/* harmony export */   \"taskContainer\": () => (/* binding */ taskContainer),\n/* harmony export */   \"taskDescription\": () => (/* binding */ taskDescription),\n/* harmony export */   \"taskDueDate\": () => (/* binding */ taskDueDate),\n/* harmony export */   \"taskPriority\": () => (/* binding */ taskPriority),\n/* harmony export */   \"taskProject\": () => (/* binding */ taskProject),\n/* harmony export */   \"taskTitle\": () => (/* binding */ taskTitle)\n/* harmony export */ });\n\r\n\r\n// project name label \r\nconst projectName = document.getElementById('project-name')\r\nconst newProjectModal = document.getElementById('new-project-modal')\r\n\r\n// project inputs\r\nconst projectList = document.getElementById('projects-list')\r\nconst addProjectForm = document.getElementById('add-project-form')\r\n\r\n//modal task inputs \r\n\r\nconst newTaskModal = document.getElementById('new-task-modal');\r\nconst taskTitle = document.getElementById('task-title');\r\nconst taskDescription = document.getElementById('task-description');\r\nconst taskDueDate = document.getElementById('task-due-date');\r\nconst taskPriority = document.getElementById('task-priority');\r\nconst taskProject = document.getElementById('task-project')\r\nconst addTaskForm = document.getElementById('add-task-form');\r\n\r\n//task list \r\n\r\nconst taskContainer = document.querySelector('.add-task-container')\n\n//# sourceURL=webpack://todo-list/./src/domElements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners */ \"./src/listeners.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_listeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n;(0,_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n\r\n\r\n//displayAllProjects()\r\n;(0,_controller__WEBPACK_IMPORTED_MODULE_1__.showTask)()\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst listeners = (() => {\r\n  _domElements__WEBPACK_IMPORTED_MODULE_1__.addProjectForm.addEventListener(\"submit\", (e) => {\r\n    console.log('salvo')\r\n    ;(0,_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_domElements__WEBPACK_IMPORTED_MODULE_1__.projectName.value);\r\n    _controller__WEBPACK_IMPORTED_MODULE_0__.displayAllProjects()\r\n    _domElements__WEBPACK_IMPORTED_MODULE_1__.projectName.value=''\r\n    e.preventDefault();\r\n  });\r\n\r\n  _domElements__WEBPACK_IMPORTED_MODULE_1__.addTaskForm.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault;\r\n    \r\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\r\n      _domElements__WEBPACK_IMPORTED_MODULE_1__.taskTitle.value,\r\n      _domElements__WEBPACK_IMPORTED_MODULE_1__.taskDescription.value,\r\n      _domElements__WEBPACK_IMPORTED_MODULE_1__.taskDueDate.value,\r\n      _domElements__WEBPACK_IMPORTED_MODULE_1__.taskPriority.value,\r\n      _domElements__WEBPACK_IMPORTED_MODULE_1__.taskProject.value\r\n    );\r\n    _controller__WEBPACK_IMPORTED_MODULE_0__.showTask();\r\n  });\r\n\r\n  document.addEventListener(\"click\", (e) => {\r\n\r\n\r\n    console.log(e.target.id)\r\n\r\n    if (e.target.closest(`span[id*=\"delete\"]`)) {\r\n      const id = e.target.closest('span').id\r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromLS(id.substr(id.indexOf('-')))\r\n      console.log(id.substr(id.indexOf('-')))  \r\n      _controller__WEBPACK_IMPORTED_MODULE_0__.removeTaskFromLS()\r\n    }\r\n    \r\n  });\r\n\r\n  \r\n\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (listeners);\r\n\n\n//# sourceURL=webpack://todo-list/./src/listeners.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks),\n/* harmony export */   \"updateProjectsStorage\": () => (/* binding */ updateProjectsStorage),\n/* harmony export */   \"updateTasksStorage\": () => (/* binding */ updateTasksStorage)\n/* harmony export */ });\n\r\n\r\nconst projects = JSON.parse(localStorage.getItem('projects')) || []\r\nconst tasks = JSON.parse(localStorage.getItem('tasks')) || []\r\n\r\nconst updateProjectsStorage = () => {\r\n    localStorage.setItem('projects', JSON.stringify(projects))\r\n}\r\n\r\nconst updateTasksStorage = () => {\r\n    localStorage.setItem('tasks', JSON.stringify(tasks))\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./src/controller.js\");\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domElements */ \"./src/domElements.js\");\n\r\n\r\n\r\n\r\nclass Project {\r\n  constructor(name) {\r\n    this.id = _getID();\r\n    this.name = name;\r\n  }\r\n}\r\n\r\nfunction addProject(id, name) {\r\n  const newProject = new Project(id, name);\r\n    _localStorage__WEBPACK_IMPORTED_MODULE_0__.projects.push(newProject);\r\n    _localStorage__WEBPACK_IMPORTED_MODULE_0__.updateProjectsStorage(); \r\n}\r\n\r\nfunction _getID() {\r\n  return ('-') +  Math.random().toString(36).substring(2, 9);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);\r\n\n\n//# sourceURL=webpack://todo-list/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\r\n\r\n\r\nclass Task {\r\nconstructor (title, description, dueDate, priority, project) {\r\n    this.id = getID()\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n    this.project = project;\r\n   \r\n}\r\n\r\n}\r\n\r\nfunction addTask(id, title, description, dueDate, priority, project) {\r\n    const newTask = new Task (id, title, description, dueDate, priority, project)\r\n\r\n    _localStorage__WEBPACK_IMPORTED_MODULE_0__.tasks.push((newTask))\r\n    _localStorage__WEBPACK_IMPORTED_MODULE_0__.updateTasksStorage()\r\n\r\n\r\n}\r\n\r\nfunction getID() {\r\n    return ('-') + Math.random().toString(36).substring(2, 9);\r\n  }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;