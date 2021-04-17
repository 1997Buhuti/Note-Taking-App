//fs is the node module used for file read write

// const fs = require('fs');

//Reading a file
// let input=fs.readFileSync('shit.txt','utf8' );
// console.log(input);

// //writing a file
// fs.writeFileSync('notes.txt',"My first Node app");

// //Challeng Append a message to notes.txt

// //Use appendFileSync

// fs.appendFileSync('notes.txt', "\n Im Manakal");
// let input2=fs.readFileSync('notes.txt','utf8' );
// console.log(input2);


// const myName = require('./util'); //myname is automatically imported beacuse it already is exported in util.js
// console.log(myName)
// const add = require('./util');
// const sum= add(100,200);
// console.log('The sum is '+sum)

// const fn1= require('./util');
// const text= fn1();
// console.log('text='+text)

//3rd party npm package import validator
// import { isEmail, isURL } from 'validator'; //ES6 
// import getNotes from './util.js';

// const message= getNotes();
// console.log(isEmail('dp.manakal82@gmail.com'))
// console.log(isEmail('dp.com'))

// console.log(isURL('https//Buhuti.com'))

//chalk package is used to outPut
// const chalk = require('chalk')

// console.log(chalk.blue("Hello World"));
// console.log(chalk.green("Scuccess"));

// const log= console.log;

// log(chalk.magenta("Hello Bitach"));
// log(chalk.bgRedBright("Hello Bitach"));

// log(chalk.bgRedBright.bold("I'm the lord of node"));

// installing a package globally ex:- npm i nodemon -g

/* Part 4 Command Line Arguments and text app */

/*
console.log(process.argv) 
//process is a global object and argv methods is used to take cmd aruguments.
//This method stores arguments in a string array.
// This array contains 3 data items such as node location,file location and the actual data that has been input

console.log(process.argv[2])// printing only the command line argument
const cmdArg=process.argv;
let text="";
for(var i=2;i<cmdArg.length;i++){
    text+=cmdArg[i]+" ";
}

console.log(text);
console.log('I cant remeber a shit');
*/

// let txt=process.argv[2];

// if(txt==='add'){

//     console.log('File added');
// }

// else if(txt==='remove'){

//     console.log('File Removed');

// }
