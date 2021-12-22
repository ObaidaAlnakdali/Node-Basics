
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

function help() {
  let helpList = [
    {commaad:"hello",argument:"-",discription:"to print hello!"},
    {commaad:"hello",argument:"text",discription:"to print hello + (text)!"},
    {commaad:"quit",argument:"-",discription:"to exit program;"},
    {commaad:"exit",argument:"-",discription:"to exit program;"},
    {commaad:"help",argument:"-",discription:"list command;"},
]
console.log(`
------------------------------------------
---------------Command--------------------
------------------------------------------\n`)
console.table(helpList);
}

// The following line starts the application
startApp("Obaida Alnakdali")
