
var fs = require('fs');
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");

  try {
    listTask = fs.readFileSync("data.json");
    tasks = JSON.parse(listTask.toString())
    // console.log(JSON.parse(tasks.toString()));
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

/**
 * Says hello
 *
 * 
 */
//  function load(bath) {
//   if(bath == "defult"){
//     try {
//       tasks = fs.readFileSync("data.json");
//       // console.log(JSON.parse(tasks.toString()));
//     } catch (error) {
//       console.error(`Got an error trying to read the file: ${error.message}`);
//     }
//   }else{
//     try {
//       tasks = fs.readFileSync(`${bath}`);
//       // console.log(JSON.parse(tasks.toString()));
//     } catch (error) {
//       console.error(`Got an error trying to read the file: ${error.message}`);
//     }
//   }
 
// }

var tasks;

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @param  {string} help data typed by the user
 * @returns {void}
+ */

function onDataReceived(text) {
  text = text.trim();
  if (text === 'quit' || text === 'exit') {
    quit();
  }
  else if (text.split(" ").shift() === 'hello') {
    hello(text);
  } else if (text === 'help') {
    help(text);
  } else if (text === 'list') {
    list();
  } else if (text.split(" ").shift() === 'add') {
    add(text);
  } else if (text.split(" ").shift() === 'remove') {
    remove(text);
  } else if (text.split(" ").shift() === 'edit') {
    edit(text);
  }else if (text.split(" ").shift() === 'check') {
    check(text);
  }
  else if (text.split(" ").shift() === 'uncheck') {
    uncheck(text);
  }
  else {
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text) {
  console.log(text + '!')
}


function help() {
  let helpList = [
    { commaad: "hello", argument: null, discription: "to print hello!" },
    { commaad: "hello", argument: "text", discription: "to print hello + (text)!" },
    { commaad: "quit", argument: null, discription: "to exit program;" },
    { commaad: "exit", argument: null, discription: "to exit program;" },
    { commaad: "help", argument: null, discription: "list command;" },
    { commaad: "add", argument: "task", discription: "add task in the list;" },
    { commaad: "edit", argument: "task", discription: "edit task in the list;" },
    { commaad: "check", argument: "task num", discription: "to checked the sected tasl in list;" },
    { commaad: "uncheck", argument: "task num", discription: "tto unchecked the sected tasl in list;" },
    { commaad: "remove", argument: null, discription: "remove the last task in the list;" },
    { commaad: "remove", argument: "number of task", discription: "remove the selected task in the list;" },
  ];
  console.log(`
------------------------------------------
---------------Command--------------------
------------------------------------------\n`)
  console.table(helpList);
}

/**
 * list tasks
 *
 *
 */
 function getDone(done) {
  if (done == true) {
    return "✓"
  }else{
    return " "
  }
}


/**
 * list tasks
 *
 * @returns {void}
 */
function list() {
  if (tasks.length == 0) {
    console.log("you dont have any task");
  } else {
    for(i=0; i < tasks.length; i++){
      console.log(`${i+1}.[${getDone(tasks[i].done)}] ${tasks[i].task}`)
    }
  }
}

/**
 * add tasks
 *
 * @returns {void}
 */
function add(text) {
  if (text == "add") {
    console.log("you should add task not null");
  } else {task
  }
}

/**
 * edit tasks
 *
 * @returns {void}
 */
function edit(text) {
  if (text == "edit") {
    console.log("you should edit task not null");
  }
  else {
    taskNum = text.split(" ");
    if (taskNum[1] < 1 || taskNum[1] > tasks.length) {
      console.log(`the number task ${taskNum[1]} is not exist in list task`)
    }
    else if (isNaN(parseInt(taskNum[1]))) {
      taskNum.shift();
      tasks[tasks.length - 1].task = taskNum.join("git  ");
    }
    else {
      for (i = 0; i < tasks.length; i++) {
        if (i == taskNum[1] - 1) {
          taskNum.shift();
          taskNum.shift();
          tasks[i].task = taskNum.join(" ");
        }
      }
    }
  }
}


/**
 * edit tasks
 *
 * @returns {void}
 */
function check(text) {
  if (text == "check") {
    console.log("you should check num task not null");
  }
  else {
    taskNum = text.split(" ");
    if (taskNum[1] < 1 || taskNum[1] > tasks.length) {
      console.log(`the number task ${taskNum[1]} is not exist in list task`)
    }
    else {
      for (i = 0; i < tasks.length; i++) {
        if (i == taskNum[1] - 1) {
          tasks[i].done = true;
        }
      }
    }
  }
}

/**
 * edit tasks
 *
 * @returns {void}
 */
 function uncheck(text) {
  if (text == "uncheck") {
    console.log("you should check num task not null");
  }
  else {
    taskNum = text.split(" ");
    if (taskNum[1] < 1 || taskNum[1] > tasks.length) {
      console.log(`the number task ${taskNum[1]} is not exist in list task`)
    }
    else {
      for (i = 0; i < tasks.length; i++) {
        if (i == taskNum[1] - 1) {
          tasks[i].done = false;
        }
      }
    }
  }
}

/**
 * remove tasks
 *
 * @returns {void}
 */
function remove(text) {
  if (text == "remove") {
    tasks.pop()
    console.log("you removed last task");
  }
  else {
    taskNum = parseInt(text.split(" ")[1]);
    if (isNaN(taskNum)) {
      console.log("ineter number of task want remove")
    } else if (taskNum < 1 || taskNum > tasks.length) {
      console.log(`the number task ${taskNum} is not exist in list task`)
    }
    else {
      tasks.splice(taskNum - 1, 1);
      console.log(`ou removed ${taskNum} task`)
    }
  }
}

function quit(){
  console.log("Quitting now, goodbye!");

  try {
    fs.writeFileSync("data.json", JSON.stringify(tasks, null, 5))
    // console.log(JSON.parse(tasks.toString()));
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }

  process.exit();
  
}

// The following line starts the application
startApp("Obaida Alnakdali")
