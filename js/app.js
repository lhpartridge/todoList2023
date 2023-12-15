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
const newTaskForm = document.getElementById('newTaskForm');
const newTaskSubmit = document.getElementById('newTaskSubmit');
const taskList = document.getElementById('taskList');

const formData =()=> {
    const nameInput = document.getElementById('newTask').value;    
    if (nameInput == "") {
        console.log('task name is undefined');
    } 
    else {
        addTask();
    }
}

const addTask =()=> {
    // console.log('before adding new task', tasks);
    let newTask = {
        id: tasks.length + 1,
        taskName: document.getElementById('newTask').value,
        status: false        
    }
    tasks = [...tasks, newTask];
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
    <li class="task-item" id=item${newTask.id}>
        ${newTask.taskName}
        <label for="${newTask.taskName}Completed">completed</label>
        <input type="checkbox" class="completed" id="${newTask.taskName}Completed"/>
    </li>
    `
    // console.log('after adding new task', newTask, taskItem, tasks);
//     // const completed = document.getElementById('${newTask}Completed');
//     // console.log(tasks, newTask );
    taskList.appendChild(taskItem);
    updateTask(tasks);
}

const updateTask =(tasks)=> {
    console.log("before updating task status", tasks);
    let completed = false;
    let completedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.getElementById(`item${tasks[i].id}`);
        console.log(listItem, tasks[i]);
        completedTasks[i].addEventListener('click', ()=> {
            tasks[i].status = true;
            listItem.classList.add('completed');
        })
    }
    console.log('after updating task status', tasks);
    
}

    

    // const newTask = {
    //     taskName: document.getElementById('newTask').value,
    //     status: false
        
    // }

    // console.log(newTask.taskName);
    // if (newTask.taskName != '') {
    //     tasks = [...tasks, newTask];
    // } else {
    //     tasks = tasks;
    // }
    // const taskItem = document.createElement('li');
    // taskItem.innerHTML = `
    // <li class="task-item">
    //     ${newTask.taskName}
    //     <label for="${newTask.taskName}Completed">completed</label>
    //     <input type="checkbox" class="completed" id="${newTask.taskName}Completed"/>
    // </li>
    // `
    // // const completed = document.getElementById('${newTask}Completed');
    // // console.log(tasks, newTask );
    // taskList.appendChild(taskItem);
    // // addTask(newTask);