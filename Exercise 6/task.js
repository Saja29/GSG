const tasks = [];
let Flag = true;
let userInput = 0;
function printMenu() {
  console.log("Task Manager Menu:");
  console.log("1. Add Task \n2. View Tasks\n3. Toggle Task Completion\n4. Edit Task\n5. Delete Task\n6. Search by name\n7. Exit");


  userInput = prompt("Please enter a choice:");
}
function printTasks(task) {

  console.log(`${task.id}. ${task.description} ${task.complite ? "[Completed]" : "[Not Completed]"}`);
}

function task_1() {
  description = prompt("Please enter the task name:");
  const task = {};
  task.id = tasks.length + 1;
  task.description = description;
  task.complite = false;
  tasks.push(task);
  console.log("Task: "+task.description+" Added successfully");

}

function task_2() {
  if (tasks.length == 0) {
    console.log("No Tasks Available.");
  }
  else {
    console.log("Tasks:");
    tasks.forEach(printTasks);
  }

}
function task_3() {
  let id = Number(prompt("Please enter the Task Number:"));
  let ids = tasks.map(task => task.id); // Create an array of ids
  let isIncluded = ids.includes(id);

  if (isIncluded) {
    let task = tasks[id - 1];
    task.complite = !(task.complite);
    console.log("Task:",task.description,"is now marked as ",task.complite?"Completed":"Not completed");
  }
  
  else {
    console.log("The entered Task Id is incorrect");
  }

}

function task_4() {
  let id = Number(prompt("Please enter the Task Number:"));
  let task = tasks.find(task => task.id === id);
  if (task) {
    desc = prompt("Enter the new description:")
    task.description = desc
    console.log("Task: "+id+ " edited to " + desc);
  } else {
    console.log("Task not found.");
  }

}

function task_5() {
  let id = Number(prompt("Please enter the Task Number To Remove:"));

  let task = tasks.find(task => task.id === id);
  console.log("Task number to be delete: " + task.id);
  if (task) {
    tasks.splice(id - 1, id - 1);
    for (i = 0; i < tasks.length; i++) {

      let task = tasks[i];
      task.id = i + 1;
    };
    console.log("Task " + task.description + " has been deleted");
  } else {
    console.log("Task not found.");
  }


}

function task_6() {
  let name = prompt("Please enter the Task Name To Search:");
  let task = tasks.filter(task => task.description.includes(name))

  console.log("Task Name To Search: " + name);
  if (task.length > 0) {
    console.log("Tasks Found");
    task.forEach(printTasks)
  } else {
    console.log("No Task found.");
  }
}
function choice() {

  switch (Number(userInput)) {
    case 1:
      task_1();


      break;
    case 2: {
      task_2();
    }
      break;
    case 3: {
      task_3();
    }
      break;
    case 4: {
      task_4();
    }
      break;
    case 5: { task_5() }
      break;
    case 6: { task_6() }
      break;
    case 7:
      {

        Flag = false;
        console.log("Good Bye");
      }

      break;
    default:
      console.log("Please choose from 1-7 ");

  }

}



while (Flag) {
  printMenu();
  choice();
}
