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
        <input type="checkbox" class="checkbox" id="${newTask.taskName}Checkbox"/>
    </li>
    `
    // console.log('after adding new task', newTask, taskItem, tasks);
//     // const completed = document.getElementById('${newTask}Completed');
//     // console.log(tasks, newTask );
    taskList.appendChild(taskItem);
    // updateTask(tasks, taskItem);
}

const updateTask =(tasks, taskItem)=> {
    console.log("before updating task status", tasks, taskItem);
    let completedTasks = document.querySelectorAll('.checkbox');

    const completedTasksList = document.getElementById('completedTasksList')
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.getElementById(`item${tasks[i].id}`);
        completedTasks[i].addEventListener('click', ()=> {
            tasks[i].status = true;
            
            listItem.classList.add('completed');
            // console.log(!(completedTasksArray.includes(tasks[i])) )
            // ? 
            completedTasksArray = [... completedTasksArray, tasks[i]] 
            // :
            // console.log(i, tasks[i].taskName, 'is complete');
            // console.log('inside event listener', i, taskItem, completedTasks[i], tasks[i].status, listItem)
            // console.log(i, tasks[i], completedTasksArray)
        })
        // console.log('after event listener', i, completedTasks[i], tasks[i].status, listItem)
    }
    console.log(completedTasksArray)
    // for (let i = 0; i < completedTasksArray.length; i++) {
    //     console.log(i, completedTasksArray[i])
    //     let completedTask = document.createElement('li');
    //     completedTask.innerHTML = `
    //         <li class="completed-task-item" id=item${newTask.id}>
    //             ${tasks[i].taskName}
    //         </li>
    //     `
    //     console.log(completedTask)
    //     completedTasksList.appendChild(completedTask);
    // }
    console.log('after updating task status', tasks, completedTasksArray);

    
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