// To do list
// Create a list of tasks
// User can input tasks to be completed
// When submitted, the task needs to be added to the list
// Check whether the task is completed or not
// If completed, change the display to let the user know that the task has been completed
// Option: how many tasks have been completed that day
// how many tasks remain
// checkbox for task completion
// ====================================================

// Project needs
/**
 * array of tasks
 *      type of task: indoor, outdoor, outside home
 *      repeated task: daily, weekly, monthly
 *      if daily, morning, afternoon, evening
 *      if weekly, which day of the week
 * form for task input
 *      input: text, 
 *      checkbox: new task with modifiers
 * form for task status
 *      input: checkbox? 
 * functions
 *      add task
 *      task completed
 *      remove task
 *      update task list
 *      display tasks
 *          task status: not completed, in progress, completed
 *      display completed tasks
 *      end of day message for next day's tasks
 *      
 */

let tasks = [];
let completedTasksArray = [];
const newTaskForm = document.getElementById('newTaskForm');
const newTaskSubmit = document.getElementById('newTaskSubmit');
const taskList = document.getElementById('taskList');
const completedTasksList = document.getElementById('completedTasksList');

const formData =()=> {
    const nameInput = document.getElementById('newTask').value;    
    if (nameInput == "") {
        console.log('task name is undefined');
    } 
    else {
        addNewTask();
    }
}

const addNewTask =()=> {
    let newTask = {
        id: tasks.length + 1,
        taskName: document.getElementById('newTask').value,
        status: false        
    }
    tasks = [...tasks, newTask];
    addListItem(newTask);
}

const addListItem =(newTask)=> {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <li class="task-item" id=item${newTask.id}>
        ${newTask.taskName}
        <label for="${newTask.taskName}Completed">completed</label>
        <input type="checkbox" class="checkbox" id="${newTask.taskName}Checkbox"/>
    </li>
    `
    taskList.appendChild(listItem);
}


const updateTask =()=> {
    const checkboxes = document.querySelectorAll('.checkbox');
    for (let i = 0; i < checkboxes.length; i++) { 
        if(checkboxes[i].checked == true) { 
            checkboxes[i].classList.add('completed');
            tasks[i].status = true;

                // console.log(tasks[i], checkboxes[i])
                !(completedTasksArray.includes(tasks[i])) ? 

            completedTasksArray = [...completedTasksArray, tasks[i]] :
            null
        }
        // console.log(i, checkboxes[i], completedTasksArray);
    }
    addCompletedTask(completedTasksArray);
}

addCompletedTask =(completedTasksArray)=> {
    completedTasksArray.forEach(element => {
    const listItem = document.createElement('li');
        
        listItem.innerHTML = `
        <li class="task-item" id=item${element.id}>
        ${element.taskName}
        <label for="${element.taskName}Completed">completed</label>
        <input type="checkbox" class="checkbox" id="${element.taskName}Checkbox"/>
        </li>
        `
        completedTasksList.appendChild(listItem);
    });
    console.log(tasks, completedTasksArray)    
    removeTaskItem()
}

const removeTaskItem =()=> {
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i].status == true) {
            console.log(tasks[i])
            // remove the task from the task list
        }
    }
    console.log(tasks, completedTasksArray)

}