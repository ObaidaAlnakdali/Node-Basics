
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
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}

var tasks = [{ task: "buy" }, { task: "reed book", }];

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


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * print help list
 *
 * @returns {void}
 */
function help() {
  let helpList = [
    { commaad: "hello", argument: null, discription: "to print hello!" },
    { commaad: "hello", argument: "text", discription: "to print hello + (text)!" },
    { commaad: "quit", argument: null, discription: "to exit program;" },
    { commaad: "exit", argument: null, discription: "to exit program;" },
    { commaad: "help", argument: null, discription: "list command;" },
    { commaad: "add", argument: "task", discription: "add task in the list;" },
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
 * @returns {void}
 */
function list() {
  if (tasks.length == 0) {
    console.log("you dont have any task");
  } else {
    console.table(tasks);
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
  } else {
    task = text.substring(4);
    tasks.push({ task: task })
    console.log(task);
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
  } else {
    task = text.split(" ")[1];
    taskNum = parseInt(task)
    if (isNaN(taskNum)) {
      console.log("ineter number of task want remove")
    } else if (taskNum == 1) {
      tasks.shift()
      console.log("you removed first task");
    } else {
          tasks.splice(taskNum-1, 1);
    }
  }
}

// The following line starts the application
startApp("Obaida Alnakdali")
