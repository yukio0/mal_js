'use strict';
let readLineSync = require("readline-sync");

function READ(str){
    return str;
}

function EVAL(str){
    return str;
}

function PRINT(str){
    return str;
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