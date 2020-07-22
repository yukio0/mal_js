'use strict';
const readLineSync = require("readline-sync");
const reader = require('./reader.js');
const printer = require('./printer');

function READ(str){
    return reader.read_str(str);
}

function EVAL(str){
    return str;
}

function PRINT(str){
    return printer.pr_str(str);
}

function rep(str){
    return PRINT(EVAL(READ(str)));
}

let test = readLineSync.getRawInput();

while(true){
    let input = readLineSync.question("user> ");
    let isEOF = (readLineSync.getRawInput() === "\x00" || readLineSync.getRawInput() === "\x1A");
    if(isEOF)
        break;
    else
        console.log(rep(input));
}