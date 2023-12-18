const updateTask =(tasks, taskItem)=> {
    console.log("before updating task status", tasks);
    let completed = false;
    let completedTasks = document.querySelectorAll('.completed');
    const completedTasksList = document.getElementById('completedTasksList')
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.getElementById(`item${tasks[i].id}`);
        completedTasks[i].addEventListener('click', ()=> {
            tasks[i].status = true;
            listItem.classList.add('completed');
            if (tasks[i].status == true) {
                console.log(tasks[i].taskName, "task is completed");
                let completedTask = document.createElement('li');
                completedTask.innerHTML = `
                    <li class="completed-task-item" id=item${newTask.id}>
                        ${tasks[i].taskName}
                    </li>
                `
                completedTasksList.appendChild(completedTask);
                console.log(i, completedTask);
            }
            console.log('after updating task status', tasks);
        })
    }
    // console.log('after updating task status', tasks);
    
}

//=============================================

const updateTask =(tasks, taskItem)=> {
    console.log("before updating task status", tasks, taskItem);
    let completed = false;
    // let completedTask = {
    //     id: taskItem,
    //     // taskName: document.getElementById('newTask').value,
    //     status: true        
    // }
    // completedTasksArray = [...completedTasksArray, completedTask];
    let completedTasks = document.querySelectorAll('.completed');
    // if (completedTasks.contains())

    console.log(completedTasks);
    // console.log("before updating task status", tasks, taskItem, completedTasksArray);
    // console.log("after adding completed task to array", tasks, taskItem, completedTasksArray);

    const completedTasksList = document.getElementById('completedTasksList')
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.getElementById(`item${tasks[i].id}`);
        // console.log(i, tasks, tasks[i].id, completedTasksArray)
        completedTasks[i].addEventListener('click', ()=> {
            tasks[i].status = true;

            completedTasksArray.push(tasks[i])
            // console.log(i, tasks[i].taskName, listItem, "completed button is checked", tasks[i].status, completedTasksArray)
            listItem.classList.add('completed');
    //         let completedTask = document.createElement('li');
            if (tasks[i].status == true) {
                // console.log(i, tasks[i].taskName, "task is completed");
    //             // let completedTask = document.createElement('li');
    //             completedTask.innerHTML = `
    //                 <li class="completed-task-item" id=item${tasks[i].id}>
    //                     ${tasks[i].taskName}
    //                 </li>
    //             `
    //             completedTasksList.appendChild(completedTask);
    //             console.log(i, completedTask);
            }
    //         console.log('after updating task status', tasks);
        })
    }
    // console.log('after updating task status', tasks);
    
}